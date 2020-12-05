echo '\n\n requesting all heroes'
curl -s http://localhost:3000/heroes | jq

echo '\n\n requesting flash'
curl -s http://localhost:3000/heroes/1 | jq

echo '\n\n requesting with invalid data'
curl -s -X POST http://localhost:3000/heroes \
  --data-binary '{"invalid": "data"}' | jq

echo '\n\n Creating Chapolin'
CREATED=$(curl -s -X POST http://localhost:3000/heroes \
  --data-binary '{"name": "Chapolin", "age": 100, "power": "Strength"}')
echo $CREATED | jq


echo '\n\n requesting chapolin'
ID=$(echo $CREATED | jq .id)
sleep 0.1
curl -s "http://localhost:3000/heroes/$ID" | jq
