import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/vitest";
import { User } from '../../src/entities';
import UserList from '../../src/components/UserList';
import React from 'react';

describe('UserList', () => {
    it('should render no users when users array is empty ', () => {
        // const users: User[] = []
        render(<UserList users={[]}/>)
        expect(screen.getByText(/no users/i)).toBeInTheDocument()
    })

    
    it('should render list of users ', () => {
        const users: User[] = [
            {id: 1, name: 'Deo'},
            {id: 2, name: 'John'},
        ]
        render(<UserList users={users}/>)
        
        users.forEach(user => {
            const link = screen.getByRole('link', {name: user.name})
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', `/users/${user.id}`)
        })
    })
})