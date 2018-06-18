# reproduce for inferno#1355

1. clone this repo

2. `npm install`

3. `node_modules/.bin/tsc` or `node_modules/.bin/webpack`

```bash
src/index.tsx:19:33 - error TS2326: Types of property 'component' are incompatible.
  Type 'typeof Compo' is not assignable to type 'ComponentClass<RouteComponentProps<any>> | StatelessComponent<RouteComponentProps<any>> | Compone...'.
    Type 'typeof Compo' is not assignable to type 'StatelessComponent<any>'.
      Types of property 'defaultProps' are incompatible.
        Type '{} | null' is not assignable to type 'Partial<any> | undefined'.
          Type 'null' is not assignable to type 'Partial<any> | undefined'.

19                 <Route path='/' component={Compo}></Route>
                                   ~~~~~~~~~~~~~~~~~
```
