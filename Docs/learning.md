# Next.js Caching Overview

## 1. Default Caching Behavior
- By default, fetch requests in Next.js are **not cached** (`cache: 'no-store'`).
  ```js
  let data = await fetch('https://api.vercel.app/blog', { cache: 'no-store' })
  ```

## 2. Opting Into Caching
- You can explicitly cache a fetch request by setting `cache: 'force-cache'`:
  ```js
  fetch('https://...', { cache: 'force-cache' })
  ```
- This will serve the data from cache on subsequent requests until revalidated.

## 3. Caching Entire Routes or Functions
- Use the `"use cache"` directive at the top of a page, layout, or async function to cache its output:
  ```js
  'use cache'

  export default function Layout({ children }) {
    return <div>{children}</div>
  }
  ```
  Or inside a function:
  ```js
  export async function getData() {
    'use cache'
    const data = await fetch('/api/data')
    return data
  }
  ```

## 4. React Cache API
- You can memoize async functions using React's `cache` utility:
  ```js
  import { cache } from 'react'
  import 'server-only'

  export const getItem = cache(async (id) => {
    // fetch or compute data
  })
  ```

## 5. Advanced: Tagging and Revalidation
- Tag cache entries for fine-grained invalidation:
  ```js
  fetch('https://...', { next: { tags: ['a', 'b', 'c'] } })
  ```
- Invalidate by tag:
  ```js
  import { revalidateTag } from 'next/cache'
  revalidateTag('a')
  ```

## 6. Route Handler Caching
- For route handlers, enable caching with:
  ```js
  export const dynamic = 'force-static'
  export async function GET() { ... }
  ```

## 7. Custom Cache Handlers
- You can configure a custom cache handler in `next.config.js` for advanced scenarios (e.g., distributed cache).

## 8. Build Cache
- Next.js also caches build artifacts in `.next/cache` to speed up builds in CI/CD.

---

**Summary:**  
Next.js provides flexible caching at the fetch, function, and route level. You can opt in or out, tag cache entries, and control revalidation. This enables both static and dynamic data to be served efficiently, improving performance and scalability.

---

### Q: If fetch is not cached by default, why specify `cache: 'no-store'`?

**A:**
- By default, fetch requests in Next.js are not cached (`cache: 'no-store'`).
- You only need to specify `cache: 'no-store'` if you want to be explicit, or if a parent/layout sets a different cache policy (like `fetchCache = 'default-cache'`).
- In those cases, specifying `cache: 'no-store'` ensures that particular fetch is always dynamic and never cached, regardless of the global or parent setting.
