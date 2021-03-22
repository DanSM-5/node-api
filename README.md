# Cake shop

### Installation 📋

```
npm install
```


### Running 🚀
To run the project you only need to run the start command

```
npm start
```


### Commands we'll be using

#### **Getting all the cakes:**
```
curl 'localhost:3015/cakes' -v 
```

#### **Getting a specific cake:**
```
curl 'localhost:3015/cakes/:id' -v 
```

#### **Storing a cake:**
```
curl -X POST 'localhost:3015/cakes' -v \
-H 'Content-Type: application/json' \
-d '{
    "name": <string>,
    "flavors": Array<string>,
    "price": <int>
}' 
```

#### **Deleting a cake:**
```
curl -X DELETE 'localhost:3015/cakes/:id' -v
```

#### **Updating a cake:**
```
curl -X PUT 'localhost:3015/cakes/:id' -v \
-H 'Content-Type: application/json' \
-d '{
    "name": <string>,
    "flavors": Array<string>,
    "price": <int>
}'
```

