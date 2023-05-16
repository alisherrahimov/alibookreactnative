import {api} from './mainApi';

export const bookApi = api.injectEndpoints({
  endpoints: build => ({
    search: build.mutation({
      query: ({text}: {text: string}) => {
        return {
          url: 'book/search',
          method: 'POST',
          body: {
            text: text.toLowerCase(),
          },
        };
      },
    }),
    getCategories: build.query({
      query: () => {
        return {
          url: 'category/categories',
          method: 'GET',
        };
      },
    }),
    getHome: build.query({
      query: () => {
        return {
          url: 'book/home',
          method: 'GET',
        };
      },
    }),
  }),
});

export const {useSearchMutation, useGetCategoriesQuery, useGetHomeQuery} =
  bookApi;
