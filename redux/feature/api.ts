import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface RTKData {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export const api = createApi({
	// baseQuery: fetchBaseQuery({
	// 	baseUrl: 'https://jsonplaceholder.typicode.com/users',
	// }),

	reducerPath: 'instructorsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/',
	}),
	tagTypes: ['Instructor'],

	endpoints: (builder) => ({
		// Define your endpoints here
		// For example:
		// getUsers: builder.query<Array<RTKData>, void>({
		// 	query: () => 'users',
		// }),
		GetUsers: builder.query<Array<RTKData>, void>({
			query: () => '/posts',
			transformResponse: (res: any) => res.reverse(),
			providesTags: ['Instructor'],
		}),
	}),
});

// Export hooks for usage in components
export const { useGetUsersQuery } = api;
