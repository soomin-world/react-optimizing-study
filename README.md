## memo

- component의 불필요한 렌더링을 막을 수 있는 Hook
- 하지만 부모 component로 부터 prop를 받는경우엔 리렌더링이 일어남

## useCallback

- component의 불필요한 렌더링을 막을 수 있는 Hook
- useEffect와 사용 방법이 비슷하며, 사용대상은 함수이다

## useMemo

- component의 불필요한 렌더링을 막을 수 있는 Hook
- useCallback과 사용방법이 동일하며, 사용대상은 배열이나 객체이다.

### 원시타입 data들은 리렌더링이 일어나지 않는다.
