/**
 * Enhanced Contact Form with Real-time Validation
 */

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import LoadingSpinner from '../components/LoadingSpinner';

const useFormValidation = () => {
    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let error = '';

        switch (name) {
            case 'name':
                if (!value.trim()) error = 'Name is required';
                else if (value.trim().length < 2) error = 'Name must be at least 2 characters';
                break;
            case 'email':
                if (!value.trim()) error = 'Email is required';
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email address';
                break;
            case 'phone':
                if (value && !/^[\d\s\-\+\(\)]+$/.test(value)) error = 'Invalid phone number';
                break;
            case 'subject':
                if (!value.trim()) error = 'Subject is required';
                break;
            case 'message':
                if (!value.trim()) error = 'Message is required';
                else if (value.trim().length < 10) error = 'Message must be at least 10 characters';
                break;
            default:
                break;
        }

        return error;
    };

    const validateForm = (formData) => {
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const clearError = (name) => {
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
        });
    };

    return { errors, validateField, validateForm, clearError, setErrors };
};

export { useFormValidation };
