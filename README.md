# facade-configurator
shapediver configurator with external controls

in this project I try to get external controls for a shapediver iframe via API access like they do it in this description:
https://shapediver.com/api#getModelData

in my case I try to change the point values of a .JSON string, that I created in my Grasshopper model.
the parameter name and the parameter values are already readable

![param points](https://user-images.githubusercontent.com/45270352/49089488-f586d480-f25b-11e8-9031-c9d5af77ab45.jpg)

I try to change the string with this comand but nothing happens when I hit the 'change point pos' button

![setparam](https://user-images.githubusercontent.com/45270352/49089891-df2d4880-f25c-11e8-8ab1-6da11b455008.png)

futhermore I got the following instruction from the shapediver support but i dont know what does that mean and where i have to whitelist which domain:

 'your models will be accessible through the API without restrictions, you just need to whitelist the domains where you embed them in your Embed tab.'

here is the link to the shapediver model with the embed code: https://shapediver.com/m/next-try2

and here is the link to the plunker editor: http://plnkr.co/edit/8tgexrB1ODHWaRuL1ARV?p=preview
