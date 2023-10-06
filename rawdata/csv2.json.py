# https://stackoverflow.com/a/66071962

import csv 
import json
import time
import datetime
from time import mktime

def csv_to_json(csvFilePath, jsonFilePath):
    jsonArray = []
      
    #read csv file
    with open(csvFilePath, encoding='utf-8') as csvf: 
        #load csv file data using csv library's dictionary reader
        csvReader = csv.DictReader(csvf) 

        #convert each csv row into python dict
        for row in csvReader: 
            # Convert the US date to timestamp. Formatting is done in JavaScript
            if row["start"] != "" and row["end"] != "":
                start = datetime.datetime.strptime(row["start"], "%m/%d/%Y")
                end   = datetime.datetime.strptime(row["end"], "%m/%d/%Y")
                row["start"] = mktime(start.timetuple()) * 1000
                row["end"] = mktime(end.timetuple()) * 1000
            #add this python dict to json array

            jsonArray.append(row)
  
    #convert python jsonArray to JSON String and write to file
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf: 
        jsonString = json.dumps(jsonArray, indent=4)
        jsonf.write(jsonString)
          
csvFilePath = r"members-data-short.csv"
jsonFilePath = r'../_data/memberList.json'

start = time.perf_counter()
csv_to_json(csvFilePath, jsonFilePath)
finish = time.perf_counter()

print(f"Conversion 100.000 rows completed successfully in {finish - start:0.4f} seconds")