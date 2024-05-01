<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch HTML from GitHub</title>
</head>
<body>
    <script>
        // Function to fetch HTML code from a GitHub repository
        function fetchHtmlFromRepo(repoUrl, filePath) {
            var apiUrl = "https://api.github.com/repos/" + repoUrl + "/contents/" + filePath;

            // Make a GET request to the GitHub API
            fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Extract the HTML content from the response
                var htmlContent = atob(data.content);

                // Remove all existing HTML elements
                document.body.innerHTML = '';

                // Add the fetched HTML content to the webpage
                document.write(htmlContent);

                console.log("HTML code fetched from GitHub repository and injected into the webpage.");
            })
            .catch(error => console.error("Error fetching HTML from GitHub:", error));
        }

        // Example usage
        fetchHtmlFromRepo("Unblocked78/games", "main/cookielicker");
    </script>
</body>
</html>
