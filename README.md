# Find Travel Buddy

## Demo Live
[https://shankydoodle.github.io/travel-buddy/](https://shankydoodle.github.io/travel-buddy/)

## Description
Part1 and Part2 both are rendered on same html page. However, their functional logic and sample data is maintained 
separately in each file i.e. 'tBuddyPart1.js' and 'tBuddyPart2.js', for the ease of usability and debugging.

Functional logic is independent of size of the sample data. So, if we want to add new data to data set, 
we can directly insert that into sample data object. This won't affect the functionality.

In part 2, as it was expected to get geo-graphical data from google APIs, co-ordinates of cities are taken from google maps 
and maintained in an object, so that I could focus more on functional logic. Also, function 'findDistanceBetweenCities' 
which calculate the distance between cities based on lat-long is referred from internet.