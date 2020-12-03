export type Field = {
  data: {
    title?: string;
    fields: {
      title: string;
      levels: number[];
      square?: boolean;
    }[];
  };
};
