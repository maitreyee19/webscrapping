### How to use the Extension 
When we search about the active listing houses of  a particular city in RedFIN at the bottom we can see a download All link .When you click the link ,it will download a csv file which contains URL of all the  houses listed in that particular city. 

In the Background.js script, first we need to mention the csvpath for which we are planning to get listed houses info. we can right click and copy the download link and put it in variable Var csvPath as mentioned below.
### manifest.json

First, a manifest.json file is created. Every extension requires a manifest file. The extension has a popup file and icon declared under the browser_action field of manifest.json.Here its name is given “Get DOM” and the icon used is “print *.png. The manifest file also contains information about a bootstrap file, here it is called background.js.

### Background.js
Redfin.com provides the listed housing data in a CSV format with URLs of the houses. The Background.js script loads the same CSV in memory with house details . Then it loops over the rows of the CSV and extracts the URL of the listed houses present in the CSV.

Every 10 seconds it will load a new URL in a new chrome tab.

After the content gets loaded, the background.js scripts execute content.js script in the new tab that is opened earlier.

### content.js
It will download the HTML DOM of each house as a .html file to my download directory with a naming convention having URL info to make it unique.
Now we have *.html files in our local directory as per our need.
Once we have all the HTML files in our local directory, we can scrap data using beautiful soup from the local directory path. We will see how we can use beautiful soup to scrap downloaded data in the next part.

### Step to load chrome extension to chrome browser



When we search about the active listing houses of a particular city on Redfin Website, at the bottom we can see a download All link. When you click the link, it will download a CSV file that contains the URL of all the houses listed in that particular city.

In the Background.js script, first, we need to mention the csvpath of the city for which we are planning to get listed house info. we can copy the download link and put it in variable Var csvPath as mentioned below.
