import json
import random
import time

NUM_OF_SECURITIES = 30
NUM_OF_FUTURES = 20
FREQ = 10
OUTFILE = "db.json"

class Item:
  def __init__(self, account_executive, daily, accumulated):
    self.account_executive = account_executive
    self.daily_turnover = daily
    self.accumulated_turnover = accumulated

  def inc(self):
    delta = random.randint(1000,9999)
    if random.random()>0.5:
      self.daily_turnover += delta
      self.accumulated_turnover += delta

  def toString(self):
    return json.dumps(self, default=lambda o: o.__dict__,
            sort_keys=True, indent=4)

  def toJSON(self):
    return json.loads(self.toString())

class Items:
  def __init__(self, total):
    self.items = []
    for _ in xrange(total):
      account_executive = random.randint(10000,99999)
      daily = random.randint(100000,200000)
      accumulated = daily + random.randint(100000,200000)
      self.items.append(Item(account_executive, daily, accumulated))

  def inc(self):
    for item in self.items:
      item.inc()

  def toJSON(self):
    l = []
    for item in self.items:
      l.append(item.toJSON())
    return l

  def toString(self):
    return json.dumps(self.toJSON(), indent=4)

securities = Items(NUM_OF_SECURITIES)
futures = Items(NUM_OF_FUTURES)

while True:
  data = {
  "securities": securities.toJSON(),
  "futures": futures.toJSON()
  }
  #print data
  with open(OUTFILE, 'w') as outfile:
    json.dump(data, outfile, indent=4)
  time.sleep(FREQ)
  securities.inc()
  futures.inc()
