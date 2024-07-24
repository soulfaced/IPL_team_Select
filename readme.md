step 1: data collection
data is collected using bright data from "https://www.espncricinfo.com/"
we are scrapping the following data :
    1. t20 wc match result:
        "https://www.espncricinfo.com/records/tournament/team-match-results/icc-men-s-t20-world-cup-2022-23-14450"
    2. t20 wc batting summary:
        "https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament"
    3. t20 wc bowling summary
        "https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament"
    4. t20 wc player info
        "https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament"

    links of websites in provided from where data is scrapped.

You can find code to scrape data in ./scraper_code/

You can find collcted data in folder ./data/

step 2: data cleaning and tranformation
    we are using jupyter and pandas library to process data
    after processing csv files are saved in folder ./csvFiles

step 3: data transformation in power query
    1. player view
        remove (c)
    2. match
        add a stutus of match as qualifier of super 12
    3. batter
        remove (c)
        change couloum name from 4s and 6s to fours and sixes respectively
        make out not_out as 1 or 0
    4. bowler
        make a new coloum named balls and find the total number of balls as per overs
        change couloum name from 0s,4s and 6s to zeros,fours and sixes respectively

step 4: Data modelling ans building parameters using DAX
    create many to one relation betweeen batter name and name of player
    create many to one relation betweeen bowler name and name of player
    add measures 
        for batter:
            Total Runs
            Total Innings Batted
            Total Innings Dismissed
            Batting Average            
            Total balls Faced
            Strike Rate            
            Batting Position
            Boundary %
            Avg. balls Faced
        
        for bowler:
            Wickets
            balls Bowled
            Runs Conceded
            Bowling Economy
            Bowling Strike Rate
            Bowling Average            
            Total Innings Bowled
            Dot Ball %
        
        for player:
            Player Selection
            Display Text
            Color Callout Value

step 5: Parameter scoping
    Openers:
        parameter               criteria

        batting average         >30
        strike rate             >140
        inning batted           >3
        boundry %               >50%
        batting position        <4

    Middle order:
        parameter               Criteria

        Batting Average         >40
        Strike Rate             >125
        inning batted           >3
        avg. balls faced        >20
        batting position        >2

    Finishers:
        parameter               Criteria

        Batting average         >25
        strike rate             >130
        innings batted          >3
        avg balls faced         >12
        batting position        >4
        innings bowled          >1

    All Rounders:
        parameter               Criteria

        Batting Average         >15
        Strike Rate             >140
        Innings Batted          >2
        Batting Position        >4
        Innings Bowled          >2
        Bowling Economy         <7
        Bowling Strike Rate     <20

    Bowlers:
        parameter               Criteria

        Inning bowled           >4
        bowling economy         <7
        bowling strike rate     <16
        bowling average         <20
        Dot ball %              >40


            
