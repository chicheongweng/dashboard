import json
import random
import sleep

NUM_OF_SECURITIES = 5
NUM_OF_FUTURES = 3
OUTFILE = "db.json"

class Security:
  def __init__(self, account_executive, daily, accumulated):
    self.account_executive = account_executive
    self.daily = daily
    self.accumulated = accumulated

  def toJSON(self):
    return json.dumps(self, default=lambda o: o.__dict__,
            sort_keys=True, indent=4)

class Future:
  def __init__(self, account_executive, daily, accumulated):
    self.account_executive = account_executive
    self.daily = daily
    self.accumulated = accumulated

  def toJSON(self):
    return json.dumps(self, default=lambda o: o.__dict__,
            sort_keys=True, indent=4)

securities = []
futures = []

for _ in xrange(NUM_OF_SECURITIES):
  account_executive = random.randint(10000,99999)
  daily = random.randint(100000,200000)
  accumulated = daily + random.randint(100000,200000)
  securities.append(json.loads(Security(account_executive, daily, accumulated).toJSON()))

for _ in xrange(NUM_OF_FUTURES):
  account_executive = random.randint(10000,99999)
  daily = random.randint(100000,200000)
  accumulated = daily + random.randint(100000,200000)
  futures.append(json.loads(Future(account_executive, daily, accumulated).toJSON()))

data = {
  "securities": securities,
  "futures": futures
}

while True:
  with open(OUTFILE, 'w') as outfile:
    json.dump(data, outfile, indent=4)
  sleep(5)

