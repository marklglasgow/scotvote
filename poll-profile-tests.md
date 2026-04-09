# Poll-Based Algorithm Checks

This note records a poll-informed sanity check of the manifesto matcher scoring model.

## Sources

- YouGov, 29 January 2026: [SNP lead, Reform UK in second in YouGov January 2026 Holyrood voting intention](https://yougov.com/en-gb/articles/53977-snp-lead-reform-uk-in-second-in-yougov-january-2026-holyrood-voting-intention)
- YouGov data tables, fieldwork 8-14 January 2026: [Survey report PDF](https://ygo-assets-websites-editorial-emea.yougov.net/documents/Copy_of_Internal_ScotlandResults_260114_16_w.pdf)
- Lord Ashcroft Polls, 25 March 2026: [Holyrood 2026 Scottish polling](https://lordashcroftpolls.com/2026/03/the-snps-record-the-independence-debate-what-matters-to-voters-and-is-nicola-sturgeon-an-asset-or-a-liability-my-latest-scottish-polling/)

## What The Polling Suggests

- `Labour` voters cluster around `health`, `economy`, and `education`.
- `SNP` voters cluster around `health`, `cost of living`, `economy`, and `constitutional future`.
- `Conservative` voters over-index on `immigration`, `tax`, `crime`, and `keeping Scotland in the UK`.
- `Lib Dem` voters overlap heavily with Labour on `education`, `economy`, and `health`.
- `Green` voters cluster around `poverty and inequality`, `climate`, `drug addiction`, and softer pro-independence sentiment.
- `Reform` voters cluster most strongly around `immigration` and `crime`.

## Mapping Caveat

These are not exact one-to-one issue translations. The site topic set is:

- narrower than full polling issue lists
- partly ideological rather than purely salience-based
- missing some poll categories such as `poverty and inequality`, `welfare`, `defence`, and `Brexit`

So the profiles below are informed inferences, mapped into the matcher's available topic set.

## Test Profiles And Results

### Labour-style profile

Input profile:

- `nhs` support `5`
- `education` support `4`
- `economy` support `4`
- `housing` support `3`

Result:

- `Labour 100`
- `Greens 96`
- `Lib Dems 70`
- `SNP 48`
- `Reform 9`
- `Conservatives 0`

Interpretation:

- Plausible pass.
- Labour comes first, but Greens are very close because the current topic model treats progressive public-service priorities as highly compatible with Green positions too.

### SNP-style profile

Input profile:

- `independence` support `5`
- `nhs` support `4`
- `economy` support `4`
- `costliving` support `3`

Result:

- `SNP 100`
- `Greens 97`
- `Labour 71`
- `Lib Dems 65`
- `Reform 10`
- `Conservatives 0`

Interpretation:

- Strong pass.
- The model correctly makes SNP the best match, with Greens as the nearest neighbour.

### Conservative-style profile

Input profile:

- `independence` oppose `5`
- `tax` oppose `4`
- `policing` support `4`
- `transport` support `4`
- `nhs` support `3`

Result:

- `Conservatives 100`
- `Reform 90`
- `Labour 68`
- `Lib Dems 65`
- `Greens 30`
- `SNP 0`

Interpretation:

- Conditional pass.
- A broader unionist, infrastructure, policing, and lower-tax profile gives the Conservatives the top score.
- If the profile is narrowed to just hard-line `immigration`, `tax`, and `crime`, Reform tends to overtake the Conservatives.

### Lib Dem-style profile

Input profile:

- `nhs` support `5`
- `education` support `4`
- `transport` support `5`
- `independence` oppose `2`

Result:

- `Lib Dems 100`
- `Labour 86`
- `Greens 81`
- `Conservatives 62`
- `Reform 19`
- `SNP 0`

Interpretation:

- Plausible pass.
- The model can produce a clear Lib Dem win once their strongest distinctive issue in this topic set, `transport`, is included.

### Reform-style profile

Input profile:

- `immigration` oppose `5`
- `tax` oppose `5`
- `policing` support `5`
- `climate` oppose `4`

Result:

- `Reform 100`
- `Conservatives 91`
- `Labour 25`
- `Lib Dems 25`
- `SNP 16`
- `Greens 0`

Interpretation:

- Strong pass.
- The current scoring model captures the Reform coalition very clearly.

### Green-style profile

Input profile:

- `climate` support `5`
- `equality` support `5`
- `housing` support `4`
- `transport` support `4`

Result:

- `Greens 100`
- `Labour 65`
- `Lib Dems 65`
- `SNP 50`
- `Conservatives 2`
- `Reform 0`

Interpretation:

- Strong pass.
- The model clearly separates Greens from the other parties on climate-plus-equality priorities.

## Key Takeaways

- `SNP`, `Greens`, and `Reform` are all strongly distinguished by the current algorithm.
- `Lib Dems` are distinguishable when `transport` is included, which is consistent with their strong public-transport positioning in the score table.
- `Labour` and `Greens` still sit very close together for left-of-centre public-service profiles.
- `Conservatives` and `Reform` also sit very close together for harder-line unionist-right profiles.

## Practical Conclusion

The algorithm broadly behaves plausibly against poll-informed voter types, but it has two predictable overlap zones:

- `Labour` vs `Greens`
- `Conservatives` vs `Reform`

That is not necessarily a bug. It reflects the current topic set and score spacing. If sharper separation is wanted, the next place to look is:

- refining score gaps on overlapping topics
- adding a few more discriminating topics, especially around `welfare`, `defence`, `Brexit`, or `poverty and inequality`
