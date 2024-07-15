import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('https://api.example.com/data', () => {
		const mockData = [{
			id: 0,
			name: 'Bob'
		}, {
			id: 1,
			name: 'Frank'
		}];

    return HttpResponse.json(mockData)
  }),
]
