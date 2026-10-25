---
sidebar_position: 3
sidebar_label: Reading and Writing Items
description: Attribute values, Get Item, Put Item, Query and PartiQL in the DynamoDB plugin.
---

# Reading and Writing Items

## Attribute values
An item is a map of attribute names to **Attribute Value**s. An Attribute Value has a **Type** and a **Value** string:

| Type | Value |
|---|---|
| `STRING` | The text, for example `Player1`. |
| `NUMBER` | The number as text, for example `42`. |
| `BOOL` | `1` for true, `0` for false. |
| `STRING_SET`, `NUMBER_SET`, `ATTRIBUTE_MAP`, `ATTRIBUTE_LIST` | DynamoDB JSON, for example `{"SS":["sword","shield"]}` or `{"M":{"level":{"N":"3"}}}`. |

:::warning
**Type** is `BOOL` by default. Always set the type, or the value is stored as a boolean.
:::

## Write an item
Call **Put Item** with:

| Field | Value |
|---|---|
| Table Name | The table. |
| Item | All attributes of the item, including the partition key and the sort key if the table has one. |
| Condition Expression | Optional. For example `attribute_not_exists(PlayerId)` to only create the item if it doesn't exist. |

Put Item replaces the whole item. To change some attributes, use **Update Item** with an **Update Expression**, for example `SET Coins = Coins + :amount`, and the value of `:amount` in **Expression Attribute Values**.

## Read an item
Call **Get Item** with the **Table Name** and the **Key**: the partition key, and the sort key if the table has one. The result has the **Item**. It is empty if no item has that key.

## Query
**Query** reads all items with the same partition key. Set:

| Field | Value |
|---|---|
| Table Name | The table. |
| Index Name | Optional, to query a secondary index. |
| Key Condition Expression | For example `PlayerId = :id`, or `PlayerId = :id AND begins_with(MatchId, :prefix)`. |
| Expression Attribute Values | The values, for example `:id`. |
| Limit | The maximum number of items. 0 means no limit. |
| Scan Index Forward | True for ascending sort key order, false for descending. |

DynamoDB returns at most 1 MB per call. If the result has a **Last Evaluated Key**, call Query again with it as **Exclusive Start Key** to get the next page.

**Scan** works the same way but reads the whole table. Avoid it on large tables.

## PartiQL
**Execute Statement** runs a SQL-like statement:

```sql
SELECT * FROM "Players" WHERE PlayerId = ?
```

Add a value to **Parameters** for each `?`.

## Expression attribute names
If an attribute name is a reserved word in DynamoDB, for example `Name` or `Level`, use a placeholder like `#n` in the expression and add `#n` → `Name` to **Expression Attribute Names**.
