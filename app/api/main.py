from googlesearch import search
import requests
import logging
from bs4 import BeautifulSoup as bs
import urllib

logging.basicConfig(filename='log.txt', filemode="w")

q = "index of" + input("Enter movie name:")

results = search(q, tld="co.in", num=10, stop=10)

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

def get_dl_link(link):
    r = requests.get(link).text
    s = bs(r, "html.parser")
    l = s.findAll("a")

    movieLinks = []
    for li in l:
        if(li["href"].lower().endswith(".mkv") or li["href"].lower().endswith(".mp4" or li["href"].lower().endswith(".flv")) ):
            movieLinks.append(li["href"])

    return movieLinks

dl_links = []

for links in links:
    try:
        dl_links.extend(get_dl_link(links))
    except Exception as e:
        logging.exception(e)
    
for link in dl_links:
    print(urllib.parse.unquote(link))