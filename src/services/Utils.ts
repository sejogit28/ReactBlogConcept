//Concerns utilities to get random data
export const JsonPlaceHolderURI = 'https://jsonplaceholder.typicode.com/';
export const postServiceName = 'posts';
export const commentServiceName = 'comment';
const loremIpsumString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
"eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu risus quis varius " +
"quam quisque id diam. Nunc id cursus metus aliquam eleifend mi. Gravida dictum fusce " +
"ut placerat orci nulla pellentesque dignissim enim. Quis lectus nulla at volutpat. " +
"Amet luctus venenatis lectus magna fringilla. Vel pharetra vel turpis nunc. Fringilla";
export const loremIpsumSummaryString = loremIpsumString.substring(10, 45);

export function randomIntFromInterval(): number { 
  return Math.floor(Math.random() * (20 - 1 + 1) + 1)
}

export function randomDate(start = new Date(2021, 6, 12), end = new Date()): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

