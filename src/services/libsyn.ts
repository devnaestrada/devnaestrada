export async function getFeed(): Promise<any> {
  try {
    return await fetch('/feed.json')
      .then((res) => res.json());
  } catch (error) {
    console.error(
      `Failed to fetch episodes list from Libsyn.`
    );

    return [];
  }
}

export type Feed = {
  title: string
  link: string
  'content:encoded'?: string
  'content:encodedSnippet'?: string
  enclosure: {
    length: string
    type: string
    url: string
  }
  guid: string
}[];

export async function getEpisodesList(
  params: {
    limit?: number
    offset?: number
  } = {}
): Promise<Feed> {
  const { limit = 10, offset = 0 } = params;
  const { items } = await getFeed();
  /**
   * @todo temporary fix for the limit and offset
   */
  return items.slice(offset, limit);
}
