#!/usr/bin/env python3

from googlesearch import search
import requests
import logging
from bs4 import BeautifulSoup as bs
import argparse
import urllib.parse

# Add a shebang line at the top

logging.basicConfig(filename='log.txt', filemode="w")

def get_dl_link(link):
    r = requests.get(link).text
    s = bs(r, "html.parser")
    l = s.findAll("a")

    movieLinks = []
    for li in l:
        if li["href"].lower().endswith((".mkv", ".mp4", ".flv")):
            movieLinks.append(li["href"])

    return movieLinks

def main():
    # Parse command-line arguments
    parser = argparse.ArgumentParser(description="Movie Scraper")
    parser.add_argument("movieName", help="Name of the movie")
    args = parser.parse_args()
    movie_name = args.movieName

    # Construct the search query
    q = f"index of {movie_name}"

    results = search(q, num_results=10, proxy="co.in", lang='en', sleep_interval=5, timeout=10)

    links = []

    for j in results:
        # if links are from news portals, ignore them
        if any(x in j for x in ["imdb", "news", "wikipedia", "youtube", "money", "businesstoday", "ndtv", "cnn"]):
            continue
        else:
            links.append(j)

    logging.info("Links:")
    logging.info(links)
    logging.info("...")

    dl_links = []

    for link in links:
        try:
            dl_links.extend(get_dl_link(link))
        except Exception as e:
            logging.exception(e)

    for link in dl_links:
        print(urllib.parse.unquote(link))

if __name__ == "__main__":
    main()
