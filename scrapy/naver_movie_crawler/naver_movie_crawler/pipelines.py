# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html

import csv
# item을 던지면 pipeline에서 차곡차곡 csv로 저장하도록 만들어보자
class NaverMovieCrawlerPipeline(object):
    # 비어있는 csv파일 먼저 만들기
    def __init__(self):
        # 그냥 'w'하면 text형태로 들어감
        self.csvwriter = csv.writer(open("NaverMovie.csv","w"))
        self.csvwriter.writerow(["title","count"])
    def process_item(self, item, spider):
        row = []
        row.append(item['title'])
        row.append(item['count'])
        self.csvwriter.writerow(row)
        return item

        # settings 쪽에 설정추가 ~ settings.py로~가세요
