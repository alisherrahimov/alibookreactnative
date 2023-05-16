import {setUser} from '../redux/reducer/user';
import {api} from './mainApi';

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      query: phone => {
        return {
          url: 'auth/login',
          method: 'POST',
          body: {phone: phone},
        };
      },
    }),
    verifyCode: build.mutation({
      query: ({phone, code}: {phone: string; code: string}) => {
        return {
          url: 'auth/verify',
          method: 'POST',
          body: {
            phone: phone,
            code: code,
          },
        };
      },
    }),
    interestItem: build.mutation({
      query: ({items}: {items: string[]}) => {
        return {
          url: 'auth/createInterest',
          method: 'POST',
          body: {
            item: items,
          },
        };
      },
    }),
    getMe: build.query({
      query: () => {
        return {
          url: 'auth/profile',
          method: 'GET',
        };
      },
      async onQueryStarted({}, {dispatch, queryFulfilled}) {
        console.log('redd');
        try {
          const {data} = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          console.log(error, 'error');
        }
      },
    }),
  }),
});
export const {
  useLoginMutation,
  useVerifyCodeMutation,
  useInterestItemMutation,
  useGetMeQuery,
} = userApi;
