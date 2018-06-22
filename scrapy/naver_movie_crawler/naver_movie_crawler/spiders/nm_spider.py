import scrapy

from naver_movie_crawler.items import NaverMovieCrawlerItem

class MovieSpider(scrapy.Spider):
    # 아래 세 변수는 무조건 만들어줘야함
    name = "NaverMovie"
    allow_domain = ["http://movie.naver.com"]
    start_urls = [
        "https://movie.naver.com/movie/running/current.nhn"
    ]

    # 링크를 가져오는 함수 설정, 아래 함수이름을 지켜줘야함.
    # start_urls가 request를 해서 나온 response의 argument로 들어갑니다.
    def parse(self, response):
        links = response.xpath('//*[@id="content"]/div[1]/div[1]/div[3]/ul/li/dl/dt/a/@href').extract()[:10]
        for link in links:
            link = response.urljoin(link)
            yield scrapy.Request(link, callback=self.parse_page_contents)
            # 링크하나하나를 Request보내서 callback함수(parse_page_contents)가 response를 받음

    def parse_page_contents(self, response):
        item = NaverMovieCrawlerItem()
        item["title"] = response.xpath('//*[@id="content"]/div[1]/div[2]/div[1]/h3/a[1]/text()').extract()[0]
        # 관객수는 없을 수도 있어서...
        try:
            item["count"] = response.xpath('//*[@id="content"]/div[1]/div[2]/div[1]/dl/dd[5]/div/p[2]/text()').extract()[0]
        except:
            item["count"] = "0명"

        yield item
