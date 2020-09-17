function upvote()
{
	// We get entryId from the global variable we set in the layout
	return castVote(entryId, 'up')
}

function downvote()
{
	return castVote(entryId, 'down')
}

function castVote(entry_id, type, vote)
{
	fetch(actionUrl + '&entry_id=' + entry_id + '&type=' + type + '&vote=' + vote)
	.then(function (response) {
		return response.json();
	})
	.then(function (myJson) {
		console.log('myJson', myJson);
		return myJson
	})
	.catch(function (error) {
		alert("Error: " + error);
	});
}

function getPercentage(up, down) {
	if(up == 0 && down == 0) {
		return 0
	}

	return Math.round(((up / (up + down)) * 100), 2)
}