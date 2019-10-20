=>build multiple application
->Link : https://github.com/angular/angular-cli/wiki/stories-multiple-apps
->For more info check ".angular-cli.json"

=>Build site application
ng build --project 0 --watch
OR
ng build --project site --watch
OR
ng build --project site --deploy-url="/dist/" --watch 

(--deploy-url="/dist/" option will add "/dist/" before all bundules link (index.html))

=>Build admin panel  application
ng build --project 1 --watch
OR
ng build --project admin --watch
OR
ng build --project admin --deploy-url="/admin_dist/" --watch 

(--deploy-url="/admin_dist/" option will add "/admin_dist/" before all bundules link (index.html))




==========================
=>Create module (sub module)
ng g m empty

=>Create component
ng g c massager -m massager







=>Temp (start mongodb)
/opt/mongodb/bin/mongod --dbpath=/opt/mongodb/bin/data --storageEngine=mmapv1
