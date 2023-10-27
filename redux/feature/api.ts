import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface RTKData {
	id: string;
	title: string;
	description: string;
}

export const api = createApi({
	reducerPath: 'instructorsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000',
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
		updateData: builder.mutation({
			query: ({ _id, ...singleData }) => ({
				url: `/api/post/${_id}`,
				method: 'PUT',
				body: singleData,
			}),
			invalidatesTags: ['Instructor'],
		}),
		deleteData: builder.mutation({
			query: (_id) => ({
				url: `/api/post/${_id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Instructor'],
		}),
	}),
});

// Export hooks for usage in components
export const {
	useGetUsersQuery,
	useAddDataMutation,
	useUpdateDataMutation,
	useDeleteDataMutation,
} = api;
