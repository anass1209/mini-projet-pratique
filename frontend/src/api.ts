import axios from 'axios';
import { Candidate } from './types';

// The base URL of our Django API.
const API_BASE_URL = 'http://localhost:8000/api';

/**
 * @param skill - Optional skill to filter by.
 * @returns A promise that resolves to an array of candidates.
 */
export const getCandidates = async (skill: string = ''): Promise<Candidate[]> => {
    try {
        let url = `${API_BASE_URL}/candidates/`;
        if (skill) {
            // Append skill as a query parameter if provided
            url += `?skill=${skill.trim()}`;
        }
        const response = await axios.get<Candidate[]>(url);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch candidates:", error);
        return []; // Return empty array on error
    }
};

/**
 * Creates a new candidate by sending form data to the backend.
 * @param formData - The form data containing candidate information and the CV file.
 * @returns A promise that resolves to the newly created candidate.
 */
export const createCandidate = async (formData: FormData): Promise<Candidate> => {
    const response = await axios.post<Candidate>(`${API_BASE_URL}/candidates/`, formData, {
        headers: {
            // Important for file uploads, browser will set the boundary
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};