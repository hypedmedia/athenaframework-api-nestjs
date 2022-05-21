# Athena Framework - Unofficial API 

* Since i was looking into some API stuff, i've decided to create an unofficial API for the Athena Framework, which is powerd by NestJS.
* It's in your hand to secure who can access the 9090 Port.

# Current Endpoints - Not final

## Accounts
```typescript
localhost:9090/accounts/discord?id=DISCORD_ID // Returns account based on discord id
```

## Players

```typescript
localhost:9090/players/all // Will return all players
localhost:9090/players/inventory?id=CHARACTERID // Will return players inventory based on their characters id
```

## Vehicles
```typescript
localhost:9090/vehicles/all // Will return all vehicles which currently exist in the database.
localhost:9090/vehicles/character?id=CHARACTERID // Return vehicles of a player based on their characters id.
```

# Factions
```typescript
localhost:9090/factions/all // Returns all factions
localhost:9090/factions/?name=FACTIONNAME // Returns a faction based on name
localhost:9090/factions/members?id=FACTIONID // Returns the members of a faction
localhost:9090/factions/vehicles?id=FACTIONID // Returns the vehicles of a faction
localhost:9090/factions/storage?id=FACTIONID // Returns the Storage of a faction
```
