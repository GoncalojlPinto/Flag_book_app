interface BookResponse {
  numbFound: number;
  docs: Book[];
}

interface Book {
  title: string;
  id: string;
  author?: string[];
}

interface BookContent {
  details: BookDetails;
}

interface BookDetails {
  authors: [{ name: string }];
  cover: string;
  title: string;
  description: string;
  descriptionV: { value: string };
  key: string;
  contributors: [{ name: string }];
  publish_date: string;
}

export type { BookResponse, BookContent, BookDetails, Book };
