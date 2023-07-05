const LIBSYN_FEED_URL = process.env.NEXT_PUBLIC_LIBSYN_FEED_URL as string;

export async function getFeed(): Promise<any> {
  try {
    return await fetch(LIBSYN_FEED_URL)
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
  const data = await getFeed();
  /**
   * @todo temporary fix for the limit and offset
   */
  return data.slice(offset, limit);
}
