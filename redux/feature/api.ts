import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface RTKData {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export const api = createApi({
	reducerPath: 'instructorsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000/',
	}),
	tagTypes: ['Instructor'],

	endpoints: (builder) => ({
		GetUsers: builder.query<Array<RTKData>, void>({
			query: () => '/api/post',
			transformResponse: (res: any) => res.reverse(),
			providesTags: ['Instructor'],
		}),
		addData: builder.mutation({
			query: (instructor) => ({
				url: '/api/post',
				method: 'POST',
				body: instructor,
			}),
			invalidatesTags: ['Instructor'],
		}),
	}),
});

// Export hooks for usage in components
export const { useGetUsersQuery, useAddDataMutation } = api;
