import { delay, http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('https://api.example.com/data', async () => {
		const mockData = [{
			id: 0,
			name: 'Bob'
		}, {
			id: 1,
			name: 'Frank'
		}];

		await delay(2000);

    return HttpResponse.json(mockData);
  }),
]
