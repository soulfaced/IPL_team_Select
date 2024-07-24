step 1: data collection

data is collected using bright data from [https://www.espncricinfo.com/](https://www.espncricinfo.com/)

we are scrapping the following data:
1. t20 wc match result: [https://www.espncricinfo.com/records/tournament/team-match-results/icc-men-s-t20-world-cup-2022-23-14450](https://www.espncricinfo.com/records/tournament/team-match-results/icc-men-s-t20-world-cup-2022-23-14450)
2. t20 wc batting summary: [https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament](https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament)
3. t20 wc bowling summary: [https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament](https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament)
4. t20 wc player info: [https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament](https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament)

links of websites in provided from where data is scrapped.

You can find code to scrape data in `./scraper_code/`

You can find collected data in folder `./data/`

step 2: data cleaning and transformation
we are using jupyter and pandas library to process data
after processing csv files are saved in folder `./csvFiles`

step 3: data transformation in power query
1. player view
    - remove (c)
2. match
    - add a status of match as qualifier of super 12
3. batter
    - remove (c)
    - change column name from 4s and 6s to fours and sixes respectively
    - make out not_out as 1 or 0
4. bowler
    - make a new column named balls and find the total number of balls as per overs
    - change column name from 0s, 4s and 6s to zeros, fours and sixes respectively

step 4: Data modeling and building parameters using DAX
create many-to-one relation between batter name and name of player
create many-to-one relation between bowler name and name of player
add measures for:
- batter:
    - Total Runs
    - Total Innings Batted
    - Total Innings Dismissed
    - Batting Average
    - Total balls Faced
    - Strike Rate
    - Batting Position
    - Boundary %
    - Avg. balls Faced
- bowler:
    - Wickets
    - balls Bowled
    - Runs Conceded
    - Bowling Economy
    - Bowling Strike Rate
    - Bowling Average
    - Total Innings Bowled
    - Dot Ball %
- player:
    - Player Selection
    - Display Text
    - Color Callout Value

step 5: Parameter scoping
Openers:
- parameter: batting average
    - criteria: >30
- parameter: strike rate
    - criteria: >140
- parameter: inning batted
    - criteria: >3
- parameter: boundary %
    - criteria: >50%
- parameter: batting position
    - criteria: <4

Middle order:
- parameter: Batting Average
    - criteria: >40
- parameter: Strike Rate
    - criteria: >125
- parameter: inning batted
    - criteria: >3
- parameter: avg. balls faced
    - criteria: >20
- parameter: batting position
    - criteria: >2

Finishers:
- parameter: Batting average
    - criteria: >25
- parameter: strike rate
    - criteria: >130
- parameter: innings batted
    - criteria: >3
- parameter: avg balls faced
    - criteria: >12
- parameter: batting position
    - criteria: >4
- parameter: innings bowled
    - criteria: >1

All Rounders:
- parameter: Batting Average
    - criteria: >15
- parameter: Strike Rate
    - criteria: >140
- parameter: Innings Batted
    - criteria: >2
- parameter: Batting Position
    - criteria: >4
- parameter: Innings Bowled
    - criteria: >2
- parameter: Bowling Economy
    - criteria: <7
- parameter: Bowling Strike Rate
    - criteria: <20

Bowlers:
- parameter: Inning bowled
    - criteria: >4
- parameter: bowling economy
    - criteria: <7
- parameter: bowling strike rate
    - criteria: <16
- parameter: bowling average
    - criteria: <20
- parameter: Dot ball %
    - criteria: >40

