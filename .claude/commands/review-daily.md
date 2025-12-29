# Review Daily English

Review the English draft in a daily journal entry and correct it.

## Instructions

1. Find the daily entry:
   - If date specified: `/Users/orangekame3/src/github.com/orangekame3/vault/daily/$ARGUMENTS.md`
   - If "today" or no argument: use today's date (YYYY-MM-DD format)
2. Read the `::ja` section to understand the intent
3. Read the `<!-- draft: -->` in `::en` section
4. Add review notes to `<!-- review: -->` section with format:
   - "original" → "improved" (reason in Japanese)
5. Write the polished English after the review comments
6. Update the file

## Review Focus
- Grammar and spelling fixes
- Natural English expression
- Keep review notes helpful for learning
- Preserve the user's voice

## Example Usage
- `/review-daily` - review today's entry
- `/review-daily 2025-12-29` - review specific date
