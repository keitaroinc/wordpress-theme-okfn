# School of Data - Visual Refresh Guidelines

## 1. Introduction

The visual refresh for the SCODA network is provided by the [wordpress-theme-okfn-fresh](https://github.com/keitaroinc/wordpress-theme-okfn-fresh) WordPress theme.

The visually refreshed theme is based on the old [wordpress-theme-okfn](https://github.com/oki-archive/wordpress-theme-okfn) WordPress theme. It introduces visual design changes, new features and support for newer versions of PHP, such as PHP 7 and above.

## 2. Activation of the new WordPress theme

The [wordpress-theme-okfn-fresh](https://github.com/keitaroinc/wordpress-theme-okfn-fresh) theme is already pre-installed and available for all sites within the scoda.okfn.org WordPress multisite network.

To activate the new WordPress themes go to __Appearance > Themes__, within the WordPress back-end and click the __Activate__ button -- *it becomes visible when you hover the theme screenshot*.

Once the theme is activated, the new features become available and the content of specific pages can be modified according to the following guidelines.

__If pages are not modified with the required HTML markup elements, the content will be displayed as good as possible and might look broken.__

## 3. New HTML markup

### 1. Home page

The visually refreshed Home page is expected to have the following HTML structure. Text can be modified and translated, but the HTML structure must remain the same, to get the exact appearance as on the [schoolofdata.org](https://schoolofdata.org/) website.

It is __crucially important__ that the __WordPress shortcodes__ -- *bracketed words with underscores instead of spaces* -- __remain intact__.

```html
<section class="coloured banner" [okfn_header_image]>
    <div class="container">
        <div class="row">
            <div class="span8">
                <div class="well">
                    <h1>Learn how to work with [okfn_word_slider] data</h1>
                    We are a network of <strong>individuals</strong> and <strong>organizations</strong> working on empowering
                    civil society organizations, journalists and citizens with <strong>skills</strong> they need to use data
                    effectively. We are School of Data and we believe that <strong>evidence is power</strong>.
                    <div class="row hero-buttons">
                        <div class="span4"><a class="btn btn-large btn-primary btn-block" href="https://schoolofdata.org/courses"><strong>Learn</strong> with us</a></div>
                        <div class="span4"><a class="btn btn-large btn-primary btn-block" href="https://schoolofdata.org/contribute"><strong>Contribute</strong> with us</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="blog" class="latest">
    <div class="container">
        <div class="row">
            <div class="span4">
                <h2><strong>Latest</strong> blog post</h2>
                [latest_post]
            </div>
            <div class="span4">
                <h2><strong>Latest</strong> course</h2>
                [latest_post id="28673"]
            </div>
            <div class="span4">
                <h2><strong>Latest</strong> publication</h2>
                [latest_post id="32337"]
            </div>
        </div>
    </div>
</section>
<section id="contact">
    <div class="container">
        <div class="row twitter-widget" hidden="">
            <div class="span4">
                <div class="scoda-title"><a href="[twitter_link]"><strong>Follow</strong> us on</a>[twitter_icon]</div>
            </div>
            <div class="span7">[tweeter]</div>
        </div>
    </div>
</section>
```

### 2. Courses page

The visually refreshed Courses page is expected to have the following HTML structure. Text can be modified and translated, but the HTML structure must remain the same, to get the exact appearance as on the [schoolofdata.org](https://schoolofdata.org/courses/) Courses page.

It is __crucially important__ that the __WordPress shortcodes__ -- *bracketed words with underscores instead of spaces* -- __remain intact__.

```html
<div class="row courses">
    <div class="span4">
        <div class="course-categories-sidebar" data-spy="affix" data-offset-top="450">
            <div class="course-category">
                <div class="scoda-title">Jump <strong>to</strong></div>
                <h2 class="course-title"><a href="#Essentials">Essentials</a></h2>
                <ul>
                    <li><a href="#DataFundamentals" data-target="#DataFundamentalsToggle">Data Fundamentals</a></li>
                    <li><a href="#IntroDataCleaning" data-target="#IntroDataCleaningToggle">Data Cleaning</a></li>
                    <li><a href="#IntroExploringData" data-target="#IntroExploringDataToggle">Exploring Data</a></li>
                    <li><a href="#GentleIntroExtractingData" data-target="#GentleIntroExtractingDataToggle">Extracting Data</a></li>
                    <li><a href="#GentleIntroMapping" data-target="#GentleIntroMappingToggle">Mapping</a></li>
                    <li><a href="#MobileDataCollection" data-target="#MobileDataCollectionToggle">Collecting data</a></li>
                    <li><a href="#PresentingData" data-target="#PresentingDataToggle">Presenting Data</a></li>
                </ul>
            </div>
            <div class="course-category">
                <h2 class="course-title"><a href="#Thematic">Thematic</a></h2>
                <ul>
                    <li><a href="#IntroAidData" data-target="#IntroAidDataToggle">Aid Data</a></li>
                    <li><a href="#WorkingWithBudgetAndSpendingData" data-target="#WorkingWithBudgetAndSpendingDataToggle">Budget Data</a></li>
                </ul>
            </div>
            <div class="course-category">
                <h2 class="course-title"><a href="#Campaigning">Campaigning</a></h2>
                <ul>
                    <li><a href="#" data-target="#"></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="span8">
        <div id="Essentials" class="course-category-header">
            <h2>Essentials</h2>
            <p class="course-category-description">The key skills to understand, manage and work with data.</p>

        </div>
        <div id="scodaCourses" class="accordion">
            <!-- Data Fundamentals -->
            <div id="DataFundamentals" class="course-parent">
                <div class="course-parent-header">
                    <h2 class="course-title">Data Fundamentals</h2>
                    The Data Fundamental modules provide a solid overview over the workflow with data guiding you from what data is, to how to
                    make your data tell a story. The courses listed below should be seen as a whole, a quick overview of
                    the elements involved in working with data.
                    <div class="course-toggle"><a class="btn btn-primary toggle-modules" href="#DataFundamentals" data-toggle="collapse" data-target="#DataFundamentalsToggle"
                            data-parent="#scoda_courses">Show Modules</a></div>
                </div>
                <div id="DataFundamentalsToggle" class="course-children collapse">
                    <div class="course-child">
                        <h3 class="course-title">What is Data?</h3>
                        This course gives a short introduction in the world of data. If you are starting your journey into this wonderful land, this
                        course is for you. The course covers basic concepts, different types of data and gives an introduction
                        to machine readable data.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/courses/what-is-data/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Finding Data</h3>
                        Don't know where to start looking for data? This section gives an introduction to data portals and different data sources.
                        Finally we will walk you through how to use one sample data portal.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/finding-data/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Sort and Filter: The basics of spreadsheets</h3>
                        So you found and downloaded your dataset? What now? Sort and Filter introduces a powerful tool to manage data: Spreadsheets.
                        Based on Google Spreadsheets, this Course introduces the basic functions as well how to sort and
                        filter data to find what you might be interested in….
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/sort-and-filter/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Taming the Fierce Beast – The Math you need to start</h3>
                        Worried about all those numbers? This module will help you to refresh the basic math (don't be afraid it's mainly counting
                        and adding).
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/the-math-you-need-to-start/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">'But what does it mean?': Analyzing data (spreadsheets continued)</h3>
                        Wonder how to make sense of the data? Basic Analysis will help you to understand what your data might mean. It also introduces
                        spreadsheet formulas and helps you calculate more values out of what you already have.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/analyzing-data/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">From Data to Diagrams: An introduction to plots and charts</h3>
                        A picture says more than a thousand words – yeah but how do we turn a thousand words into a picture? This section will help
                        you to understand basic data visualization and create them using Google spreadsheets. Visualizing
                        data will help you to better understand the data you are handling.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/data-to-diagrams/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Look Out!: Common Misconceptions and how to avoid them.</h3>
                        Not everything is easily understood in dataland. In this course we give a short overview over common pitfalls when talking
                        about data and how to avoid them. It can help you avoid the mistakes made as well as read other peoples
                        claims more carefully. If you want to learn what to watch out for: join in!
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/common-misconceptions/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Tell me a story: Working out what’s interesting in your data</h3>
                        Data alone is meaningless and often boring. To understand it better you will need context. In this section we will talk about
                        how to publish the data we worked on throughout the basic track. We will talk about how to identify
                        key points of your data to help you use data to make your voice heard.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/tell-me-a-story/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Data provenance</h3>
                        To make a credible and sustainable data project, you need to document your steps right from the beginning. This course contains
                        tips and tricks and tools for doing so.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/data-provenance/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Basic Graphs</h3>
                        Visualising your data is not just about communicating your findings. It's also a very powerful way to gain insights into
                        your data. This module introduce you to the basics of making graphs in a spreadsheet.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/courses/basic-graphs/">Take a look</a></div>
                    </div>
                </div>
            </div>
            <!-- A gentle introduction to data cleaning -->
            <div id="IntroDataCleaning" class="course-parent">
                <div class="course-parent-header">
                    <h2 class="course-title">A Gentle Introduction to Data Cleaning</h2>
                    This School of Data course is a gentle introduction to reducing errors by cleaning data. It was created by the
                    <a
                        href="http://tacticaltech.org/">Tactical Technology Collective</a> and gives you a clear overview what can go wrong in spreadsheets and
                        how to fix it (if it does). Take this course if you want to learn why it is important to clean data
                        and how to do it.
                        <div class="course-toggle"><a class="btn btn-primary toggle-modules" href="#IntroDataCleaning" data-toggle="collapse" data-target="#IntroDataCleaningToggle"
                                data-parent="#scoda_courses">Show Modules</a></div>
                </div>
                <div id="IntroDataCleaningToggle" class="course-children collapse">
                    <div class="course-child">
                        <h3 class="course-title">Course outline: a gentle introduction to cleaning data</h3>
                        In this section, learn about the “horror stories” of where data errors in spreadsheets have led to real consequences and
                        how you can avoid them yourself.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/data-cleaning/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Section 1: Nuts and chewing gum</h3>
                        In this section, you’ll gain practical knowledge of common formatting and layout features of spreadsheets and some ideas
                        about how to present your raw data to others so they will love you!
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/data-cleaning-nuts-and-gum/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Section 2: the Invisible Man is in your spreadsheet, messing with your data</h3>
                        In this section, you’ll learn how even characters which you cannot see can cause havoc in data analysis. The section will
                        teach you to ghostbust white space and other non-printable characters such as carriage returns, spaces
                        and tabs. Once you have removed them, you can get on with your analysis in peace.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/data-cleaning-invisible-man-in-spreadsheets/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Section 3: your data is a witch’s brew</h3>
                        Three is not a number. Nor is a million. At least not when they are typed in as text in a cell in a spreadsheet. Your spreadsheet
                        is pedantic and needs everything to be precise and consistent. Read on to learn more.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/data-cleaning-witchs-brew/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Section 4: Did you bring the wrong suitcase (again)?</h3>
                        All our spreadsheet wants from us is each cell of data to be organised and neatly packed. In this section, you will analyse
                        data to highlight problems in the way it has been structured so as to avoid them in your own work
                        with data.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/data-cleaning-wrong-suitcase/">Take a look</a></div>
                    </div>
                </div>
            </div>
            <!-- Introduction into Exploring Data -->
            <div id="IntroExploringData" class="course-parent">
                <div class="course-parent-header">
                    <h2 class="course-title">Introduction into Exploring Data</h2>
                    This set of modules will give you essential tools to explore and analyse data to find insights. Made by
                    <a
                        href="http://tacticaltech.org/">Tactical Technology Collective</a>, School of Data and friends.
                        <div class="course-toggle"><a class="btn btn-primary toggle-modules" href="#IntroExploringData" data-toggle="collapse" data-target="#IntroExploringDataToggle"
                                data-parent="#scoda_courses">Show Modules</a></div>
                </div>
                <div id="IntroExploringDataToggle" class="course-children collapse">
                    <div class="course-child">
                        <h3 class="course-title">A gentle introduction to exploring and understanding your data</h3>
                        What if we told you, there is a quick way, your computer can help you to summarize and understand data? Wouldn’t this be
                        great? Check this course to learn how to use pivot tables to do this!
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/gentle-introduction-exploring-and-understanding-data/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Advanced Spreadsheet Formulas</h3>
                        It's time to go beyond the basics and learn advanced formula tricks. This module will introduce you, among other things,
                        to Vlookup: one of the most powerful spreadsheet formula.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/courses/advanced-spreadsheet-formulas/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">An introduction to SQL Databases for analysing data - Part 1</h3>
                        Spreadsheets are really useful, but sometimes they're too limited for what you want to do. Like analysing a very big dataset
                        quickly or gaining complex insights on your data. Here comes the SQL query.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/courses/sql-databases-part-one/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">An introduction to SQL Databases for analysing data - Part 2</h3>
                        Now that we know the basics of SQL language, we can explore how to use them to analyse a real dataset.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/courses/sql-databases-part-two/">Take a look</a></div>
                    </div>
                </div>
            </div>
            <!-- A Gentle Introduction into Extracting Data -->
            <div id="GentleIntroExtractingData" class="course-parent">
                <div class="course-parent-header">
                    <h2 class="course-title">A gentle Introduction into Extracting Data</h2>
                    You know the data you need is somewhere out there on the Web - but how do you get it on your computer? This course will lead
                    you there.
                    <div class="course-toggle"><a class="btn btn-primary toggle-modules" href="#GentleIntroExtractingData" data-toggle="collapse" data-target="#GentleIntroExtractingDataToggle"
                            data-parent="#scoda_courses">Show Modules</a></div>
                </div>
                <div id="GentleIntroExtractingDataToggle" class="course-children collapse">
                    <div class="course-child">
                        <h3 class="course-title">Extracting Data from PDFs</h3>
                        Far too much data is trapped in PDFs. In order to be able to work with, analyse and visualise data, we need it in machine-readable
                        formats. It's often not easy to the data out again, but sometimes possible - find out how here.
                        <div class="course-toggle"><a class="btn btn-primary" href="http://schoolofdata.scoda-staging.okfn.org/extracting-data-from-pdfs/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Making data on the web useful: scraping</h3>
                        Learn how to scrape without code in 5 minutes and when you might need to invest time in more sophisticated techniques.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/scraping/">Take a look</a></div>
                    </div>
                </div>
            </div>
            <!-- A Gentle Introduction to Mapping -->
            <div id="GentleIntroMapping" class="course-parent">
                <div class="course-parent-header">
                    <h2 class="course-title">A Gentle Introduction to Mapping</h2>
                    So you want to make maps? Maps are easy to read, but not that easy to make. Read on to discover the tools and techniques
                    that will allow you to make maps for offline and online uses.
                    <div class="course-toggle"><a class="btn btn-primary toggle-modules" href="#GentleIntroMapping" data-toggle="collapse" data-target="#GentleIntroMappingToggle"
                            data-parent="#scoda_courses">Show Modules</a></div>
                </div>
                <div id="GentleIntroMappingToggle" class="course-children collapse">
                    <div class="course-child">
                        <h3 class="course-title">Online geocoding</h3>
                        Need to put your data on a map but it doesn't contain Latitude and Longitude values? Read on!
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/geocoding/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Introduction to GIS: QGIS</h3>
                        There are many ways to visualise data on a map. But the free and open source tool QGIS (or Quantum Geographical Information
                        System) will give you a lot more power and flexibility than most tools.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/courses/introduction-to-gis/">Take a look</a></div>
                    </div>
                </div>
            </div>
            <!-- Collecting Data using Smartphones -->
            <div id="MobileDataCollection" class="course-parent">
                <div class="course-parent-header">
                    <h2 class="course-title">Collecting data using smartphones</h2>
                    If you ever had to collect data on the field for research or humanitarian purpose, you know how complicated that process
                    can be. But with the right tools and a good process, mobile data collection can be made a lot more easy
                    and efficient.
                    <div class="course-toggle"><a class="btn btn-primary toggle-modules" href="#MobileDataCollection" data-toggle="collapse" data-target="#MobileDataCollectionToggle"
                            data-parent="#scoda_courses">Show Modules</a></div>
                </div>
                <div id="MobileDataCollectionToggle" class="course-children collapse">
                    <div class="course-child">
                        <h3 class="course-title">Course outline: introduction to mobile data collection and ODK</h3>
                        An introduction to the challenges of mobile data collection and the tool that will be featured for this course: Open Data
                        Kit
                        <div class="course-toggle"><a class="btn btn-primary" href="http://schoolofdata.scoda-staging.okfn.org/2015/11/13/course-outline-mobile-data-collection/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Creating your ODK Data Collection Form</h3>
                        This module will introduce you to the initial setup of your spreadsheet for use with Open Data Kit
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/creating-your-odk-data-collection-form-excel/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Uploading and Testing your forms using Kobo Toolbox</h3>
                        This module will help you navigate the interface of Kobo Toolbox, a variation of Open Data Kit, to prepare forms before starting
                        your survey.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/uploading-and-testing-your-forms-using-kobo-toolbox/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Setting up your Kobo Toolbox form on your Android device</h3>
                        Kobo Toolbox provides a good platform to collect data using two devices: your laptop and your mobile devices e.g. smartphones
                        and tablets. On this module, we will talk about how to use your Kobo Collect forms on your devices.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/28684-2/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Managing your Kobo Toolbox database</h3>
                        With this last module about Kobo Toolbox and mobile data collection, we will talk about how to manage your Kobo Toolbox database
                        using the online platform.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/managing-your-kobo-toolbox-database/">Take a look</a></div>
                    </div>
                </div>
            </div>

            <!-- Presenting Data -->
            <div id="PresentingData" class="course-parent">
                <div class="course-parent-header">
                    <h2 class="course-title">Presenting Data</h2>
                    Data presentation can mean Data visualisation, but not only. There are a million ways (and tools) to present data, and the
                    best way is the one that works for your audience. This course will introduce you to some interesting
                    tools and methods, allowing you to tackle data presentation in various ways.
                    <div class="course-toggle"><a class="btn btn-primary toggle-modules" href="#PresentingData" data-target="#PresentingDataToggle"
                            data-toggle="collapse" data-parent="#scoda_courses">Show Modules</a></div>
                </div>
                <div id="PresentingDataToggle" class="course-children collapse">
                    <div class="course-child">
                        <h3 class="course-title">Storytelling with data: TimemapperJs</h3>
                        Are you working on complex stories involving different kind of data (geographic, time)? Get to know the datastorytelling
                        tools that help you make the most of your story.
                        <div class="course-toggle"><a class="btn btn-primary" href="http://schoolofdata.scoda-staging.okfn.org/using-timemapperjs-for-data-storytelling/">Take a look</a></div>
                    </div>
                </div>
            </div>


            <div id="Thematic" class="course-category-header">
                <h2>Thematic</h2>
                <p class="course-category-description">Know your data to make the best out of it.</p>

            </div>
            <!-- Introduction to Aid Data -->
            <div id="IntroAidData" class="course-parent">
                <div class="course-parent-header">
                    <h2 class="course-title">An Introduction to Aid Data</h2>
                    This course was produced in 2014 as part of the <a href="http://opendevtoolkit.net/">Open Development Toolkit</a>,
                    a project led by Zara Rahman and jointly funded by School of Data and <a href="http://devinit.org/">Development Initiatives</a>.
                    It provides an introduction to the world of data available on the topic of international aid, from finding
                    it, cleaning it, visualising it and using it in the media.
                    <div class="course-toggle"><a class="btn btn-primary toggle-modules" href="#IntroAidData" data-toggle="collapse" data-target="#IntroAidDataToggle"
                            data-parent="#scoda_courses">Show Modules</a></div>
                </div>
                <div id="IntroAidDataToggle" class="course-children collapse">
                    <div class="course-child">
                        <h3 class="course-title">Course outline: Introduction to aid data</h3>
                        Welcome to the world of aid data! In this first module, we’ll be starting from first principles: what do we actually mean
                        when we say ‘aid’, and why is looking at aid data important?
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/courses/introduction-to-aid-data-what-is-it-where-is-it/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">A guide to IATI data</h3>
                        One major source of aid data is made available through the International Aid Transparency Initiative (IATI). There are a
                        few different ways that you can access raw IATI data, so here’s a quick run through of what you can
                        get, and where it is, including IATI data itself as well as data about IATI data (metadata).
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/courses/a-guide-to-iati-data/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Cleaning IATI data with OpenRefine</h3>
                        So once you've got the raw IATI data, what next? Often it might need 'cleaning' - here, we'll use a sample IATI dataset to
                        learn how to use a powerful cleaning tool, OpenRefine.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/courses/cleaning-iati-data-with-openrefine/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">An introduction to OECD-DAC data</h3>
                        Another major source of data available about international development data, is the OECD. Here, we run through a few ways
                        that they make this data available, and where to find what you're looking for.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/courses/an-introduction-to-oecd-dac-data/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Inspiration module: how is aid data used in the media?</h3>
                        We've seen a few ways of where to find aid data, how to clean it and use it - but how is this applied in the real world?
                        Here are a couple of examples of 'reverse engineering' aid data that we might come across in the
                        media - maybe it will give you some ideas!
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/courses/inspiration-module-how-is-aid-data-used-in-the-media/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">An introduction to data visualisation</h3>
                        This module is structured a little differently to the others, in that this is a slideshow running through different ways
                        that aid data can be visualised. Included are instructions on how to customise the slideshow for
                        your own purposes, and tips on presenting it to other people.
                        <div class="course-toggle"><a class="btn btn-primary" href="http://opendevtoolkit.net/en-US/training/data-viz/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Jargon busting the world of aid</h3>
                        This module is intended as a reference point while you're going through the other modules. In each case, the relevance of
                        the term to working specifically with data is highlighted to try and make it clear what you should
                        be looking out for when you come across the term in your work.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/courses/jargon-busting-the-world-of-aid/">Take a look</a></div>
                    </div>
                </div>
            </div>
            <!-- Working with Budget and Spending Data -->
            <div id="WorkingWithBudgetAndSpendingData" class="course-parent">
                <div class="course-parent-header">
                    <h2 class="course-title">Working with Budgets and Spending Data.</h2>
                    In this course, we will take you through the steps involved working with budget and spending data. In the process, you’ll
                    learn how to wrangle and clean up some of the most common errors which we see in spending and budget
                    data, as well as doing some dataset gymnastics, such as transposition and cleanup before creating a simple
                    visualisation at the end. If you don’t have your data yet, or don’t have it in machine-readable format
                    – take a look at the two courses above on extracting data, we start from cleaning up and formatting your
                    data.
                    <div class="course-toggle"><a class="btn btn-primary toggle-modules" href="#WorkingWithBudgetAndSpendingData" data-toggle="collapse"
                            data-target="#WorkingWithBudgetAndSpendingDataToggle" data-parent="#scoda_courses">Show Modules</a></div>
                </div>
                <div id="WorkingWithBudgetAndSpendingDataToggle" class="course-children collapse">
                    <div class="course-child">
                        <h3 class="course-title">Categorization and reference data</h3>
                        Need to put your data on a map but it doesn't contain Latitude and Longitude values? Read on!
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/categorisation-and-reference-data/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Choosing an audience and classifying your data</h3>
                        Sometimes you will need to classify your financial data, for example, to reflect services that people care about or to conform
                        to internationally recognised standards.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/classifying-financial-data/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">What is the difference between budgets and spending?</h3>
                        Before we begin working with the data, let's take a closer look at the difference between budgets and spending data - what
                        questions is it possible to answer with this data?
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/budgets-and-spending-intro/">Take a look</a></div>
                    </div>
                    <div class="course-child">
                        <h3 class="course-title">Cleaning spending data</h3>
                        A quick introduction to why spending data often needs cleaning, following into a recipe for cleaning spending data with Open
                        Refine.
                        <div class="course-toggle"><a class="btn btn-primary" href="https://schoolofdata.org/handbook/courses/cleaning-spending-data/">Take a look</a></div>
                    </div>
                </div>
            </div>
            <div id="Campaigning" class="course-category-header">
                <h2>Campaigning</h2>
                <p class="course-category-description">Learn about the relevant skills and tools to solve common problems (coming soon).</p>

            </div>
            <!-- campaigning modules start here -->
        </div>
    </div>
</div>
```

### 3. Widgets

`TO DO`

#### 1. Courses - Excerpt

The excerpt text shown below the page title is set per page, within the __Excerpt__ field, while editing he page in the WordPress back-end.

#### 2. Courses - Featured image

The main header image of the Courses page is set as a [Featured image](https://en.support.wordpress.com/featured-images/) while editing the page in the WordPress back-end.

## 4. Updated WordPress shortcodes

### 1. [latest_posts]

The existing [latest_posts] shortcode has been extended to support WordPress categories and custom CSS classes.

Using the shortcode with the category attribute, will generate the three most recent posts in the category News.

```php
[latest_posts category='News']
```

To limit the number of queried posts, use the `postnumber` attribute.

```php
[latest_posts postnumber='10' category='News']
```

To add a specific CSS class to the wrapping `<ul>` element, use the class attribute.

```php
[latest_posts class='news-css-class' category='News']
```

More than one CSS class can be added, if separated by spaces.

```php
[latest_posts class='news-css-class another-news-css-class' category='News']
```

## 5. New WordPress shortcodes

[wordpress-theme-okfn-fresh](https://github.com/keitaroinc/wordpress-theme-okfn-fresh) provides several new WordPress shortcodes, as addition to the existing library in `shortcodes.php`. Each new shortcode is described in details below.

### 1. [latest_post]

The [latest_post] shortcode is a modified version of the [latest_posts] shortcode, to add support for querying specific posts.

By default, the shortcode returns the single most recent __published__ or __sticky__ post.

Sticky posts are always shown first and they will override the expected post order, if set.

```php
[latest_post]
```

Specifying the `id` attribute will get the post with the specified `id`.

```php
[latest_post id='2234']
```

Specifying the `category` attribute will get the most recent post in the specified category.

```php
[latest_post category='News']
```

To add a specific CSS class to the wrapping `<div>` element, use the class attribute.

```php
[latest_post class='news-css-class' category='News']
```

More than one CSS class can be added, if separated by spaces.

```php
[latest_post class='news-css-class another-news-css-class' category='News']
```

### 2. [okfn_header_image]

Use the [okfn_header_image] shortcode to generate a background image for an HTML element. 

It is expected that the element is `<section>` and that the shortcode is called within its opening HTML tag, such as: `<section class="coloured banner" [okfn_header_image]>`.

The shortcode will output the element's `style` attribute with the property `background-image` set to the URL returned from the `get_header_image()` WordPress function.

### 3. [okfn_word_slider]

Use the [okfn_word_slider] shortcode to create an animated word slider within the `<section>` with the `banner` class.

The shortcode is expected to be used within the main title in the `<section>` with the `banner` class.

```html
<h1>Learn how to work with [okfn_word_slider] data</h1>
```

The word list can be specified in __Appearance > OKF Theme Options__, within the Underlined Words text area. Comma (,) should be used as a word delimiter. The last word in the list does not need to have a delimiter.

### 4. [twitter_link]

Use the [twitter_link] shortcode to generate a URL to the Twitter profile specified in __Appearance > OKF Theme Options__, in the __Twitter Username__ field -- within the __Social__ tab.

Text wrapped between the `<strong>` and `</strong>` HTML tags will be rendered with lightweight font with all capital letters.

```html
<a href="[twitter_link]"><strong>Follow</strong> us on</a>
```

### 5. [twitter_icon]

Use the [twitter_icon] shortcode to generate a block of HTML markup, to show a large icon with the Twitter symbol. `[twitter_icon]` adds `<span class="twitter-icon"></span>` to the HTML markup. The CSS class `twitter-icon` is used to load the Twitter icon from an image file.

```html
<div class="scoda-title"><a href="[twitter_link]"><strong>Follow</strong> us on</a>[twitter_icon]</div>
```

## 6. New OKF Theme Options

`TO DO`

### 1. Underlined Words

`TO DO`

### 2. Header Images

`TO DO`