import json

l = ['blacked out at pub ', 'hosted trivia ', 'came after an exam ', 'Left your ID ', 'Karaoked ', 'Gotten cut off ', 'Gotten pub lean ', 'Had sex in pub ', 'Made out with multiple people in a pub night ', 'Throw up during pub night ', 'Smoke a joint in the stairwell ', 'Smoke a cig in the stairwell ', 'Done drugs inside of pub (coke, poppers, edibles, needles, Molly, etc) ', 'Got drunk before a class ', 'Flirted with a bartender ', 'Had sex with a bartender on a pub night ', 'Been crossed at pub? ', 'Hit a bartenders vape ', 'Had a bartender serve you the wrong drink with a straight face🤨', 'Made out with two or more different people in one pub night ', 'Not remembered walking home from pub ', 'Dropped a glass bottle (pls stop doing this) ', 'drank with a bartender in the back ', 'bought a drink for somebody else ', 'dodged cover ', 'snuck in through the backdoor ', 'Fallen off the pub stage ', 'gotten fed pub mix to sober up ', 'tipped bartender excessively due to drunkness ', "got denied when asking to hit someone else's vape ", 'flirted with someone with the hopes of hitting their vape ', 'stolen a drink off the backdoor drink table ', 'went behind the dj stand at pub ', 'gotten kicked out by a bartender for not leaving when closing time plays ', 'Gotten detained by RUPD at pub ', 'gotten kicked out by RUPD for any reason ', 'been in pub during a TABC raid ', 'Ate dinner at pub ', 'Go to a pub night alone ', 'Gone to Yo-Yos after pub night ', 'Spilled your entire drink onto someone ', 'Ordered a sour monkey ', 'Attend a meeting at pub ', 'Bought pub merch ', 'used a fake ', 'been called out for your fake ', 'been called out for not venmoing on pub night ', 'Piss in transit from pub to home ']

data = [
    'Attend a trivia night', 'Attend a pub night', 'Attend an afternoon happy hour', 
    'Have a drink before 4pm', 'Compliment someone in the bathroom due to drunkenness', 
    'Smoke in the back alley of a pub', 'Hook up with an MPS on the dance floor', 
    'Take an MPS home on a pub night', 'Puke on someone during a pub night', 
    'Puke somewhere that is not the toilet on a pub night', 'Get kicked out of a pub', 
    'Stay till you hear closing time', 'Yelled at a bartender', 'Flirted with a bartender', 
    "Couldn't find the bathroom", 'Never missed a pub night', 'Got to Pub before 11pm', 
    'Went to Pub when you had an exam the next day', 'Disregarded homework for Pub', 
    'Ordered only Four Lokos on Pub Night', 'Yelled at a bartender', 'Flirted with a bartender', 
    "Couldn't find the bathroom", 'Never missed a pub night', 'Got to Pub before 11pm', 
    'Went to Pub when you had an exam the next day', 'Disregarded homework for Pub', 
    'Ordered only Four Lokos on Pub Night', 'Smoke a cig in the stairwell', 
    'Done drugs inside of pub (coke, poppers, edibles, needles, Molly, etc)', 
    'Got drunk before a class', 'Flirted with a bartender', 'Had sex with a bartender on a pub night', 
    'Blacked out at pub', 'Been crossed at pub?', 'Been under the influence of something stronger than weed at pub', 
    'Hit a bartenders vape', 'Had a bartender serve you the wrong drink with a straight face🤨', 
    'Called the Nate miller fan club (number on rotating tv)', 
    'Made out with two or more different people in one pub night', 'Not remembered walking home from pub', 
    'Dropped a glass bottle (pls stop doing this)', 'Drank with a bartender in the back', 
    'Had somebody buy a drink for you', 'Bought a drink for somebody else', 'Dodged cover', 
    'Snuck in through the backdoor', 'Broken a beer bottle at pub', 'Fallen off the pub stage', 
    'Gotten fed pub mix to sober up', 'Tipped bartender excessively due to drunkness', 
    "Got denied when asking to hit someone else's vape", 'Flirted with someone with the hopes of hitting their vape', 
    'Smoked a cigarette at pub', 'Stolen a drink off a booth table or the bar', 
    'Stolen a drink off the backdoor drink table', 'Went behind the dj stand at pub'
]
setlist = list(set([x.strip() for x in l] + [x.strip() for x in data]))
# create a list of dictionaries with "id" and "name" attributes for each item
json_data = []
for i, name in enumerate(setlist):
    json_data.append({"id": i+1, "name": name.capitalize()})

# output the json data to a file
with open("data.json", "w") as f:
    json.dump(json_data, f)
