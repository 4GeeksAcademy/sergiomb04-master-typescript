function renameBookImmutable(book: any, newTitle: string): any {
  return { ...book, title: newTitle };
}

export {};
