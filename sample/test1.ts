import { test, expect } from '@playwright/test';
import Ajv from "ajv";
import schema from '../schema/schema.json';

const ajv = new Ajv();

test('validate GoREST API response against schema', async () => {
    const response = await fetch('https://gorest.co.in/public/v1/users');
    const responseData = await response.json();
    console.log('Response Data:', responseData);
    // Validate the response against the schema
    const valid = ajv.validate(schema, responseData);
    
    // If validation fails, log the detailed errors before the assertion
    if (!valid) {
        console.error('AJV Validation Errors:', ajv.errorsText());
    }
    
    expect(valid).toBe(true);
});