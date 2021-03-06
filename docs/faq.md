# Frequently Asked Questions
## 400 - Bad Request
This is due to a misconfigured variable `ALLOWED_HOSTS` in `panel/local.py`. To this array please add the IP or domain hawthorne is accessed over. After this please restart hawthorne by using `supervisorctl restart hawthorne`.

!> If the above solution does not work and you're on Apache 2, please install NGINX instead as we have yet to figure out why Apache 2 sometimes break.

## 500
This should not happen, please first refer to the logs in `/var/logs/hawthorne/debug.log`. **Please read the logs carefully.** Quite often there is a database misconfiguration - if present - please change the settings in `panel/local.py`.

If the problem is not solved by this please run `hawthorne report` **before** approaching me and give me the given identifier. This ensures that I can help you faster.

> With `hawthorne report` your instance will be connected and registered in the mainframe.

## Cannot connect to MySQL database
* Is your specified `password` and `username` correct?
* Is your MySQL machine located **remote**? If yes..
  * ... is on the MySQL server the `bind` parameter correctly configured? [Hint][1]
  * ... is your user configured to be accessible from the outside? [Hint][2]

## SELinux
Try to execute the following commands and then _restart your machine:_
* `/usr/sbin/setsebool -P httpd_can_network_connect 1`
* `chcon --user system_u --type httpd_sys_content_t -Rv /local/static`

## After logging in with Steam, I am redirected back to the login page!
This usually happens if you're trying to use your Steam API key for more than one project (Steam is caching this, API keys for multiple project will stop working eventually, which is why you should only use the API key for 1 project). Try using an unused API key from another Steam account. 

If the problem persists, please contact the developers.

## 

# The problem is not listed
You can get in touch with me via [e-mail][3] or per [Discord][4].

Want to rather insult me? Then please ahead and write me a juicy email to `insult@indietyp.com`. Please get creative to, let me be the anger management class you desperately need. You can do it!

[1]:  https://stackoverflow.com/a/21627550/9077988
[2]:  https://stackoverflow.com/a/16288118/9077988
[3]:  mailto:hawthorne@indietyp.com
[4]:  https://discord.gg/3pNEqn8
