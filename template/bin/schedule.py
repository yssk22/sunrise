#!/usr/bin/env python
# -*- coding: utf-8 -*- 

import os
import sys
import json
import re
from urllib import urlopen

from BeautifulSoup import BeautifulSoup, Tag

def fetch_content(url):
    f = urlopen(url)
    return f.read()

def main(url):
    html = fetch_content(url)
    soup = BeautifulSoup(html)
    anchors = soup.findAll('a', attrs ={'name':True})

    data = parse_anchors(anchors)

    # normalize
    events = []
    for t, groups in data.items():
        for gname, entries in groups.items():
            for entry in entries:
                events.append({
                        'date' : t,
                        'group' : gname,
                        'text' : entry['text'],
                        'links' : entry['links']
                        })
    for entry in events:
        s, t = extract_time(entry['text'])
        if s is None:
            s = "00:00"
        if t is None:
            t = "24:00"
        entry['start'] = "%s %s:00" % (entry['date'], s)
        entry['end'] = "%s %s:00" % (entry['date'], t)
        entry['text'] = entry['text'].replace('〜', '-')

    print json.dumps(events, indent=4)

timeregex = re.compile(u"(\\d{1,2}:\\d{2})(〜(\\d{1,2}:\\d{2}))?", re.MULTILINE)
def extract_time(text):
    utext =text.decode('utf-8')
    m = timeregex.match(utext)
    if m:
        s, t = m.group(1), m.group(3)
        if s:
            s = s.encode('utf-8')
        if t:
            t = t.encode('utf-8')
        return (s, t)
    else:
        return (None, None)

def parse_anchors(anchors):
    data = {}
    for a in anchors:
        title = a.text
        yyyymmdd = title[0:10]
        if yyyymmdd == '':
            continue
        td = a.findNext('td', attrs={'colspan':3})
        l = []
        group = {}
        current_group = None
        current_texts = []
        current_links = []
        previous_tag = None
        for c in td.contents:
            a = None
            if isinstance(c, Tag):
                #print '[TAG] %s' % c.name
                if c.name == 'font':
                    current_group = c.text
                    if current_group != None:
                        group[current_group] = []
                if c.name == 'br':
                    if previous_tag and previous_tag.name == 'br':
                        if current_group != None:
                            group[current_group].append({
                                    'text': "\n".join(current_texts),
                                    'links': current_links
                                    })
                        current_texts = []
                        current_links = []
                    else:
                        br = True
                    pass
                elif c.name == 'a':
                    if not c.has_key('name') and c.has_key('href') and c.text != '':
                        current_links.append({'href': c['href'],
                                              'text': c.text})
                else:
                    # print 'skipped: %s' % c.name
                    pass
                previous_tag = c
            else:
                c = c.strip()
                if c:
                    #print '[TEXT] %s' % c
                    current_texts.append(c.encode('utf-8'))
                    previous_tag = None

        if current_group and current_texts:
            if current_group != None:
                group[current_group].append({
                        'text': "\n".join(current_texts),
                        'links': current_links
                        })

        data[yyyymmdd] = group
        # for gname,values in group.items():
        #     print '---'
        #     print gname
        #     for e in values:
        #         print "+++"
        #         print e['text'].decode('utf-8')
        #         print e['links']
        #         print "+++"
        #     print '---'
    return data

if __name__ == "__main__":
    main(sys.argv[1])
