import { getCandidates, createCandidate } from './api';
import { Candidate } from './types';

const style = document.createElement('style');
style.innerHTML = `
    body { font-family: sans-serif; background-color: #f4f4f9; color: #333; margin: 20px; }
    #app { max-width: 800px; margin: auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    h1, h2 { color: #444; }
    hr { border: 0; height: 1px; background: #ddd; margin: 20px 0; }
    form div { margin-bottom: 10px; }
    label { display: block; margin-bottom: 5px; font-weight: bold; }
    input[type="text"], input[type="email"], input[type="file"] { width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px; }
    button { background-color: #007bff; color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; }
    button:hover { background-color: #0056b3; }
    .candidate-item { border: 1px solid #eee; padding: 15px; margin-bottom: 10px; border-radius: 4px; background: #fafafa; }
    .candidate-item h3 { margin-top: 0; }
`;
document.head.appendChild(style);

// --- HTML Structure ---
const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
    <h1>Système de Gestion des Candidatures</h1>

    <form id="add-candidate-form">
        <h2>Ajouter un Candidat</h2>
        <div>
            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div>
            <label for="email">Email :</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div>
            <label for="skills">Compétences (séparées par une virgule) :</label>
            <input type="text" id="skills" name="skills" required>
        </div>
        <div>
            <label for="cv">CV (PDF/DOCX) :</label>
            <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" required>
        </div>
        <button type="submit">Ajouter le Candidat</button>
    </form>
    <hr>
    <div class="candidate-list-section">
        <h2>Liste des Candidats</h2>
        <div class="filter-container">
            <label for="skill-filter">Filtrer par compétence :</label>
            <input type="text" id="skill-filter" placeholder="Ex: Python">
        </div>
        <div id="candidate-list">
            <p>Chargement...</p>
        </div>
    </div>
`;


// --- DOM Element Selectors ---
const candidateListDiv = document.querySelector<HTMLDivElement>('#candidate-list')!;
const form = document.querySelector<HTMLFormElement>('#add-candidate-form')!;
const skillFilterInput = document.querySelector<HTMLInputElement>('#skill-filter')!;

// --- Functions ---
const renderCandidates = (candidates: Candidate[]) => {
    candidateListDiv.innerHTML = '';
    if (candidates.length === 0) {
        candidateListDiv.innerHTML = '<p>Aucun candidat trouvé.</p>';
        return;
    }
    candidates.forEach(candidate => {
        const candidateElement = document.createElement('div');
        candidateElement.className = 'candidate-item';
        candidateElement.innerHTML = `
            <h3>${candidate.name}</h3>
            <p><strong>Email:</strong> ${candidate.email}</p>
            <p><strong>Compétences:</strong> ${candidate.skills}</p>
            <a href="http://localhost:8000/api/candidates/${candidate.id}/cv/" target="_blank" rel="noopener noreferrer">Voir le CV</a>

        `;
        candidateListDiv.appendChild(candidateElement);
    });
};

const loadAndRenderCandidates = async (skill: string = '') => {
    try {
        const candidates = await getCandidates(skill);
        renderCandidates(candidates);
    } catch (error) {
        candidateListDiv.innerHTML = '<p style="color: red;">Erreur lors du chargement des candidats.</p>';
    }
};

// --- Event Listeners ---
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submitButton = form.querySelector<HTMLButtonElement>('button')!;
    submitButton.textContent = 'Envoi en cours...';
    submitButton.disabled = true;

    try {
        const formData = new FormData(form);
        await createCandidate(formData);
        alert('Candidat ajouté avec succès !');
        form.reset();
        loadAndRenderCandidates();
    } catch (error) {
        alert('Erreur lors de la création du candidat.');
    } finally {
        submitButton.textContent = 'Ajouter le Candidat';
        submitButton.disabled = false;
    }
});

skillFilterInput.addEventListener('input', () => {
    loadAndRenderCandidates(skillFilterInput.value);
});


// --- Initial Load ---
loadAndRenderCandidates();
