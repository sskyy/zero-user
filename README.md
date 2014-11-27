# zero-user #

This module get you a full pack of user system easily.

## Usage ##

1. Add dependency to your module package.json file like:

```
{
	"name" : "YOUR_MODULE_NAME",
	"zero" : {
		"dependencies" : {
			"user" : "^0.0.1"
		}
	}
}
```

3. Now `POST /user/register`, `POST /user/login`, `POST /user/logout` can be visited. In server side, simply use req.session.user to get current user.