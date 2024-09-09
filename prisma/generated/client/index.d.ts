
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Peripherals
 * 
 */
export type Peripherals = $Result.DefaultSelection<Prisma.$PeripheralsPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model OrderPeripheral
 * 
 */
export type OrderPeripheral = $Result.DefaultSelection<Prisma.$OrderPeripheralPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Peripherals
 * const peripherals = await prisma.peripherals.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Peripherals
   * const peripherals = await prisma.peripherals.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.peripherals`: Exposes CRUD operations for the **Peripherals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peripherals
    * const peripherals = await prisma.peripherals.findMany()
    * ```
    */
  get peripherals(): Prisma.PeripheralsDelegate<ExtArgs>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs>;

  /**
   * `prisma.orderPeripheral`: Exposes CRUD operations for the **OrderPeripheral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderPeripherals
    * const orderPeripherals = await prisma.orderPeripheral.findMany()
    * ```
    */
  get orderPeripheral(): Prisma.OrderPeripheralDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Peripherals: 'Peripherals',
    Cart: 'Cart',
    Store: 'Store',
    Orders: 'Orders',
    OrderPeripheral: 'OrderPeripheral'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "peripherals" | "cart" | "store" | "orders" | "orderPeripheral"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Peripherals: {
        payload: Prisma.$PeripheralsPayload<ExtArgs>
        fields: Prisma.PeripheralsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeripheralsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeripheralsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeripheralsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeripheralsPayload>
          }
          findFirst: {
            args: Prisma.PeripheralsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeripheralsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeripheralsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeripheralsPayload>
          }
          findMany: {
            args: Prisma.PeripheralsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeripheralsPayload>[]
          }
          create: {
            args: Prisma.PeripheralsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeripheralsPayload>
          }
          createMany: {
            args: Prisma.PeripheralsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PeripheralsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeripheralsPayload>
          }
          update: {
            args: Prisma.PeripheralsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeripheralsPayload>
          }
          deleteMany: {
            args: Prisma.PeripheralsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeripheralsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PeripheralsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeripheralsPayload>
          }
          aggregate: {
            args: Prisma.PeripheralsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeripherals>
          }
          groupBy: {
            args: Prisma.PeripheralsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeripheralsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeripheralsCountArgs<ExtArgs>
            result: $Utils.Optional<PeripheralsCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      OrderPeripheral: {
        payload: Prisma.$OrderPeripheralPayload<ExtArgs>
        fields: Prisma.OrderPeripheralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderPeripheralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPeripheralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderPeripheralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPeripheralPayload>
          }
          findFirst: {
            args: Prisma.OrderPeripheralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPeripheralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderPeripheralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPeripheralPayload>
          }
          findMany: {
            args: Prisma.OrderPeripheralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPeripheralPayload>[]
          }
          create: {
            args: Prisma.OrderPeripheralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPeripheralPayload>
          }
          createMany: {
            args: Prisma.OrderPeripheralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderPeripheralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPeripheralPayload>
          }
          update: {
            args: Prisma.OrderPeripheralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPeripheralPayload>
          }
          deleteMany: {
            args: Prisma.OrderPeripheralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderPeripheralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderPeripheralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPeripheralPayload>
          }
          aggregate: {
            args: Prisma.OrderPeripheralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderPeripheral>
          }
          groupBy: {
            args: Prisma.OrderPeripheralGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderPeripheralGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderPeripheralCountArgs<ExtArgs>
            result: $Utils.Optional<OrderPeripheralCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PeripheralsCountOutputType
   */

  export type PeripheralsCountOutputType = {
    OrderPeripheral: number
  }

  export type PeripheralsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderPeripheral?: boolean | PeripheralsCountOutputTypeCountOrderPeripheralArgs
  }

  // Custom InputTypes
  /**
   * PeripheralsCountOutputType without action
   */
  export type PeripheralsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeripheralsCountOutputType
     */
    select?: PeripheralsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeripheralsCountOutputType without action
   */
  export type PeripheralsCountOutputTypeCountOrderPeripheralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderPeripheralWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    Peripherals: number
    OrderPeripheral: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Peripherals?: boolean | StoreCountOutputTypeCountPeripheralsArgs
    OrderPeripheral?: boolean | StoreCountOutputTypeCountOrderPeripheralArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountPeripheralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeripheralsWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountOrderPeripheralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderPeripheralWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    OrderPeripheral: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderPeripheral?: boolean | OrdersCountOutputTypeCountOrderPeripheralArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrderPeripheralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderPeripheralWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Peripherals
   */

  export type AggregatePeripherals = {
    _count: PeripheralsCountAggregateOutputType | null
    _avg: PeripheralsAvgAggregateOutputType | null
    _sum: PeripheralsSumAggregateOutputType | null
    _min: PeripheralsMinAggregateOutputType | null
    _max: PeripheralsMaxAggregateOutputType | null
  }

  export type PeripheralsAvgAggregateOutputType = {
    id: number | null
    harga: number | null
    store_id: number | null
  }

  export type PeripheralsSumAggregateOutputType = {
    id: number | null
    harga: number | null
    store_id: number | null
  }

  export type PeripheralsMinAggregateOutputType = {
    id: number | null
    nama_peripheral: string | null
    slug: string | null
    deskripsi: string | null
    harga: number | null
    categories: string | null
    image: string | null
    store_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PeripheralsMaxAggregateOutputType = {
    id: number | null
    nama_peripheral: string | null
    slug: string | null
    deskripsi: string | null
    harga: number | null
    categories: string | null
    image: string | null
    store_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PeripheralsCountAggregateOutputType = {
    id: number
    nama_peripheral: number
    slug: number
    deskripsi: number
    harga: number
    categories: number
    image: number
    store_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PeripheralsAvgAggregateInputType = {
    id?: true
    harga?: true
    store_id?: true
  }

  export type PeripheralsSumAggregateInputType = {
    id?: true
    harga?: true
    store_id?: true
  }

  export type PeripheralsMinAggregateInputType = {
    id?: true
    nama_peripheral?: true
    slug?: true
    deskripsi?: true
    harga?: true
    categories?: true
    image?: true
    store_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PeripheralsMaxAggregateInputType = {
    id?: true
    nama_peripheral?: true
    slug?: true
    deskripsi?: true
    harga?: true
    categories?: true
    image?: true
    store_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PeripheralsCountAggregateInputType = {
    id?: true
    nama_peripheral?: true
    slug?: true
    deskripsi?: true
    harga?: true
    categories?: true
    image?: true
    store_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PeripheralsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peripherals to aggregate.
     */
    where?: PeripheralsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peripherals to fetch.
     */
    orderBy?: PeripheralsOrderByWithRelationInput | PeripheralsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeripheralsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peripherals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peripherals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Peripherals
    **/
    _count?: true | PeripheralsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeripheralsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeripheralsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeripheralsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeripheralsMaxAggregateInputType
  }

  export type GetPeripheralsAggregateType<T extends PeripheralsAggregateArgs> = {
        [P in keyof T & keyof AggregatePeripherals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeripherals[P]>
      : GetScalarType<T[P], AggregatePeripherals[P]>
  }




  export type PeripheralsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeripheralsWhereInput
    orderBy?: PeripheralsOrderByWithAggregationInput | PeripheralsOrderByWithAggregationInput[]
    by: PeripheralsScalarFieldEnum[] | PeripheralsScalarFieldEnum
    having?: PeripheralsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeripheralsCountAggregateInputType | true
    _avg?: PeripheralsAvgAggregateInputType
    _sum?: PeripheralsSumAggregateInputType
    _min?: PeripheralsMinAggregateInputType
    _max?: PeripheralsMaxAggregateInputType
  }

  export type PeripheralsGroupByOutputType = {
    id: number
    nama_peripheral: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image: string | null
    store_id: number
    created_at: Date
    updated_at: Date
    _count: PeripheralsCountAggregateOutputType | null
    _avg: PeripheralsAvgAggregateOutputType | null
    _sum: PeripheralsSumAggregateOutputType | null
    _min: PeripheralsMinAggregateOutputType | null
    _max: PeripheralsMaxAggregateOutputType | null
  }

  type GetPeripheralsGroupByPayload<T extends PeripheralsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeripheralsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeripheralsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeripheralsGroupByOutputType[P]>
            : GetScalarType<T[P], PeripheralsGroupByOutputType[P]>
        }
      >
    >


  export type PeripheralsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_peripheral?: boolean
    slug?: boolean
    deskripsi?: boolean
    harga?: boolean
    categories?: boolean
    image?: boolean
    store_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    Store?: boolean | Peripherals$StoreArgs<ExtArgs>
    OrderPeripheral?: boolean | Peripherals$OrderPeripheralArgs<ExtArgs>
    _count?: boolean | PeripheralsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peripherals"]>


  export type PeripheralsSelectScalar = {
    id?: boolean
    nama_peripheral?: boolean
    slug?: boolean
    deskripsi?: boolean
    harga?: boolean
    categories?: boolean
    image?: boolean
    store_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PeripheralsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Store?: boolean | Peripherals$StoreArgs<ExtArgs>
    OrderPeripheral?: boolean | Peripherals$OrderPeripheralArgs<ExtArgs>
    _count?: boolean | PeripheralsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PeripheralsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Peripherals"
    objects: {
      Store: Prisma.$StorePayload<ExtArgs> | null
      OrderPeripheral: Prisma.$OrderPeripheralPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_peripheral: string
      slug: string
      deskripsi: string
      harga: number
      categories: string
      image: string | null
      store_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["peripherals"]>
    composites: {}
  }

  type PeripheralsGetPayload<S extends boolean | null | undefined | PeripheralsDefaultArgs> = $Result.GetResult<Prisma.$PeripheralsPayload, S>

  type PeripheralsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PeripheralsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PeripheralsCountAggregateInputType | true
    }

  export interface PeripheralsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Peripherals'], meta: { name: 'Peripherals' } }
    /**
     * Find zero or one Peripherals that matches the filter.
     * @param {PeripheralsFindUniqueArgs} args - Arguments to find a Peripherals
     * @example
     * // Get one Peripherals
     * const peripherals = await prisma.peripherals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeripheralsFindUniqueArgs>(args: SelectSubset<T, PeripheralsFindUniqueArgs<ExtArgs>>): Prisma__PeripheralsClient<$Result.GetResult<Prisma.$PeripheralsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Peripherals that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PeripheralsFindUniqueOrThrowArgs} args - Arguments to find a Peripherals
     * @example
     * // Get one Peripherals
     * const peripherals = await prisma.peripherals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeripheralsFindUniqueOrThrowArgs>(args: SelectSubset<T, PeripheralsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeripheralsClient<$Result.GetResult<Prisma.$PeripheralsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Peripherals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeripheralsFindFirstArgs} args - Arguments to find a Peripherals
     * @example
     * // Get one Peripherals
     * const peripherals = await prisma.peripherals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeripheralsFindFirstArgs>(args?: SelectSubset<T, PeripheralsFindFirstArgs<ExtArgs>>): Prisma__PeripheralsClient<$Result.GetResult<Prisma.$PeripheralsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Peripherals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeripheralsFindFirstOrThrowArgs} args - Arguments to find a Peripherals
     * @example
     * // Get one Peripherals
     * const peripherals = await prisma.peripherals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeripheralsFindFirstOrThrowArgs>(args?: SelectSubset<T, PeripheralsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeripheralsClient<$Result.GetResult<Prisma.$PeripheralsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Peripherals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeripheralsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peripherals
     * const peripherals = await prisma.peripherals.findMany()
     * 
     * // Get first 10 Peripherals
     * const peripherals = await prisma.peripherals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peripheralsWithIdOnly = await prisma.peripherals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeripheralsFindManyArgs>(args?: SelectSubset<T, PeripheralsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeripheralsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Peripherals.
     * @param {PeripheralsCreateArgs} args - Arguments to create a Peripherals.
     * @example
     * // Create one Peripherals
     * const Peripherals = await prisma.peripherals.create({
     *   data: {
     *     // ... data to create a Peripherals
     *   }
     * })
     * 
     */
    create<T extends PeripheralsCreateArgs>(args: SelectSubset<T, PeripheralsCreateArgs<ExtArgs>>): Prisma__PeripheralsClient<$Result.GetResult<Prisma.$PeripheralsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Peripherals.
     * @param {PeripheralsCreateManyArgs} args - Arguments to create many Peripherals.
     * @example
     * // Create many Peripherals
     * const peripherals = await prisma.peripherals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeripheralsCreateManyArgs>(args?: SelectSubset<T, PeripheralsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Peripherals.
     * @param {PeripheralsDeleteArgs} args - Arguments to delete one Peripherals.
     * @example
     * // Delete one Peripherals
     * const Peripherals = await prisma.peripherals.delete({
     *   where: {
     *     // ... filter to delete one Peripherals
     *   }
     * })
     * 
     */
    delete<T extends PeripheralsDeleteArgs>(args: SelectSubset<T, PeripheralsDeleteArgs<ExtArgs>>): Prisma__PeripheralsClient<$Result.GetResult<Prisma.$PeripheralsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Peripherals.
     * @param {PeripheralsUpdateArgs} args - Arguments to update one Peripherals.
     * @example
     * // Update one Peripherals
     * const peripherals = await prisma.peripherals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeripheralsUpdateArgs>(args: SelectSubset<T, PeripheralsUpdateArgs<ExtArgs>>): Prisma__PeripheralsClient<$Result.GetResult<Prisma.$PeripheralsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Peripherals.
     * @param {PeripheralsDeleteManyArgs} args - Arguments to filter Peripherals to delete.
     * @example
     * // Delete a few Peripherals
     * const { count } = await prisma.peripherals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeripheralsDeleteManyArgs>(args?: SelectSubset<T, PeripheralsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peripherals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeripheralsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peripherals
     * const peripherals = await prisma.peripherals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeripheralsUpdateManyArgs>(args: SelectSubset<T, PeripheralsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Peripherals.
     * @param {PeripheralsUpsertArgs} args - Arguments to update or create a Peripherals.
     * @example
     * // Update or create a Peripherals
     * const peripherals = await prisma.peripherals.upsert({
     *   create: {
     *     // ... data to create a Peripherals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peripherals we want to update
     *   }
     * })
     */
    upsert<T extends PeripheralsUpsertArgs>(args: SelectSubset<T, PeripheralsUpsertArgs<ExtArgs>>): Prisma__PeripheralsClient<$Result.GetResult<Prisma.$PeripheralsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Peripherals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeripheralsCountArgs} args - Arguments to filter Peripherals to count.
     * @example
     * // Count the number of Peripherals
     * const count = await prisma.peripherals.count({
     *   where: {
     *     // ... the filter for the Peripherals we want to count
     *   }
     * })
    **/
    count<T extends PeripheralsCountArgs>(
      args?: Subset<T, PeripheralsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeripheralsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peripherals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeripheralsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeripheralsAggregateArgs>(args: Subset<T, PeripheralsAggregateArgs>): Prisma.PrismaPromise<GetPeripheralsAggregateType<T>>

    /**
     * Group by Peripherals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeripheralsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeripheralsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeripheralsGroupByArgs['orderBy'] }
        : { orderBy?: PeripheralsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeripheralsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeripheralsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Peripherals model
   */
  readonly fields: PeripheralsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Peripherals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeripheralsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Store<T extends Peripherals$StoreArgs<ExtArgs> = {}>(args?: Subset<T, Peripherals$StoreArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    OrderPeripheral<T extends Peripherals$OrderPeripheralArgs<ExtArgs> = {}>(args?: Subset<T, Peripherals$OrderPeripheralArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPeripheralPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Peripherals model
   */ 
  interface PeripheralsFieldRefs {
    readonly id: FieldRef<"Peripherals", 'Int'>
    readonly nama_peripheral: FieldRef<"Peripherals", 'String'>
    readonly slug: FieldRef<"Peripherals", 'String'>
    readonly deskripsi: FieldRef<"Peripherals", 'String'>
    readonly harga: FieldRef<"Peripherals", 'Float'>
    readonly categories: FieldRef<"Peripherals", 'String'>
    readonly image: FieldRef<"Peripherals", 'String'>
    readonly store_id: FieldRef<"Peripherals", 'Int'>
    readonly created_at: FieldRef<"Peripherals", 'DateTime'>
    readonly updated_at: FieldRef<"Peripherals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Peripherals findUnique
   */
  export type PeripheralsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peripherals
     */
    select?: PeripheralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeripheralsInclude<ExtArgs> | null
    /**
     * Filter, which Peripherals to fetch.
     */
    where: PeripheralsWhereUniqueInput
  }

  /**
   * Peripherals findUniqueOrThrow
   */
  export type PeripheralsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peripherals
     */
    select?: PeripheralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeripheralsInclude<ExtArgs> | null
    /**
     * Filter, which Peripherals to fetch.
     */
    where: PeripheralsWhereUniqueInput
  }

  /**
   * Peripherals findFirst
   */
  export type PeripheralsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peripherals
     */
    select?: PeripheralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeripheralsInclude<ExtArgs> | null
    /**
     * Filter, which Peripherals to fetch.
     */
    where?: PeripheralsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peripherals to fetch.
     */
    orderBy?: PeripheralsOrderByWithRelationInput | PeripheralsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peripherals.
     */
    cursor?: PeripheralsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peripherals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peripherals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peripherals.
     */
    distinct?: PeripheralsScalarFieldEnum | PeripheralsScalarFieldEnum[]
  }

  /**
   * Peripherals findFirstOrThrow
   */
  export type PeripheralsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peripherals
     */
    select?: PeripheralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeripheralsInclude<ExtArgs> | null
    /**
     * Filter, which Peripherals to fetch.
     */
    where?: PeripheralsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peripherals to fetch.
     */
    orderBy?: PeripheralsOrderByWithRelationInput | PeripheralsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peripherals.
     */
    cursor?: PeripheralsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peripherals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peripherals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peripherals.
     */
    distinct?: PeripheralsScalarFieldEnum | PeripheralsScalarFieldEnum[]
  }

  /**
   * Peripherals findMany
   */
  export type PeripheralsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peripherals
     */
    select?: PeripheralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeripheralsInclude<ExtArgs> | null
    /**
     * Filter, which Peripherals to fetch.
     */
    where?: PeripheralsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peripherals to fetch.
     */
    orderBy?: PeripheralsOrderByWithRelationInput | PeripheralsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Peripherals.
     */
    cursor?: PeripheralsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peripherals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peripherals.
     */
    skip?: number
    distinct?: PeripheralsScalarFieldEnum | PeripheralsScalarFieldEnum[]
  }

  /**
   * Peripherals create
   */
  export type PeripheralsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peripherals
     */
    select?: PeripheralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeripheralsInclude<ExtArgs> | null
    /**
     * The data needed to create a Peripherals.
     */
    data: XOR<PeripheralsCreateInput, PeripheralsUncheckedCreateInput>
  }

  /**
   * Peripherals createMany
   */
  export type PeripheralsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Peripherals.
     */
    data: PeripheralsCreateManyInput | PeripheralsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Peripherals update
   */
  export type PeripheralsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peripherals
     */
    select?: PeripheralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeripheralsInclude<ExtArgs> | null
    /**
     * The data needed to update a Peripherals.
     */
    data: XOR<PeripheralsUpdateInput, PeripheralsUncheckedUpdateInput>
    /**
     * Choose, which Peripherals to update.
     */
    where: PeripheralsWhereUniqueInput
  }

  /**
   * Peripherals updateMany
   */
  export type PeripheralsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Peripherals.
     */
    data: XOR<PeripheralsUpdateManyMutationInput, PeripheralsUncheckedUpdateManyInput>
    /**
     * Filter which Peripherals to update
     */
    where?: PeripheralsWhereInput
  }

  /**
   * Peripherals upsert
   */
  export type PeripheralsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peripherals
     */
    select?: PeripheralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeripheralsInclude<ExtArgs> | null
    /**
     * The filter to search for the Peripherals to update in case it exists.
     */
    where: PeripheralsWhereUniqueInput
    /**
     * In case the Peripherals found by the `where` argument doesn't exist, create a new Peripherals with this data.
     */
    create: XOR<PeripheralsCreateInput, PeripheralsUncheckedCreateInput>
    /**
     * In case the Peripherals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeripheralsUpdateInput, PeripheralsUncheckedUpdateInput>
  }

  /**
   * Peripherals delete
   */
  export type PeripheralsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peripherals
     */
    select?: PeripheralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeripheralsInclude<ExtArgs> | null
    /**
     * Filter which Peripherals to delete.
     */
    where: PeripheralsWhereUniqueInput
  }

  /**
   * Peripherals deleteMany
   */
  export type PeripheralsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peripherals to delete
     */
    where?: PeripheralsWhereInput
  }

  /**
   * Peripherals.Store
   */
  export type Peripherals$StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
  }

  /**
   * Peripherals.OrderPeripheral
   */
  export type Peripherals$OrderPeripheralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPeripheral
     */
    select?: OrderPeripheralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPeripheralInclude<ExtArgs> | null
    where?: OrderPeripheralWhereInput
    orderBy?: OrderPeripheralOrderByWithRelationInput | OrderPeripheralOrderByWithRelationInput[]
    cursor?: OrderPeripheralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderPeripheralScalarFieldEnum | OrderPeripheralScalarFieldEnum[]
  }

  /**
   * Peripherals without action
   */
  export type PeripheralsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peripherals
     */
    select?: PeripheralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeripheralsInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
    id_peripherals: number | null
    harga: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
    id_peripherals: number | null
    harga: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    id_peripherals: number | null
    user_email: string | null
    nama_peripheral: string | null
    slug: string | null
    harga: number | null
    categories: string | null
    image: string | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    id_peripherals: number | null
    user_email: string | null
    nama_peripheral: string | null
    slug: string | null
    harga: number | null
    categories: string | null
    image: string | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    id_peripherals: number
    user_email: number
    nama_peripheral: number
    slug: number
    harga: number
    categories: number
    image: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
    id_peripherals?: true
    harga?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
    id_peripherals?: true
    harga?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    id_peripherals?: true
    user_email?: true
    nama_peripheral?: true
    slug?: true
    harga?: true
    categories?: true
    image?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    id_peripherals?: true
    user_email?: true
    nama_peripheral?: true
    slug?: true
    harga?: true
    categories?: true
    image?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    id_peripherals?: true
    user_email?: true
    nama_peripheral?: true
    slug?: true
    harga?: true
    categories?: true
    image?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: number
    id_peripherals: number
    user_email: string | null
    nama_peripheral: string
    slug: string
    harga: number
    categories: string
    image: string | null
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_peripherals?: boolean
    user_email?: boolean
    nama_peripheral?: boolean
    slug?: boolean
    harga?: boolean
    categories?: boolean
    image?: boolean
  }, ExtArgs["result"]["cart"]>


  export type CartSelectScalar = {
    id?: boolean
    id_peripherals?: boolean
    user_email?: boolean
    nama_peripheral?: boolean
    slug?: boolean
    harga?: boolean
    categories?: boolean
    image?: boolean
  }


  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_peripherals: number
      user_email: string | null
      nama_peripheral: string
      slug: string
      harga: number
      categories: string
      image: string | null
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cart model
   */ 
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'Int'>
    readonly id_peripherals: FieldRef<"Cart", 'Int'>
    readonly user_email: FieldRef<"Cart", 'String'>
    readonly nama_peripheral: FieldRef<"Cart", 'String'>
    readonly slug: FieldRef<"Cart", 'String'>
    readonly harga: FieldRef<"Cart", 'Float'>
    readonly categories: FieldRef<"Cart", 'String'>
    readonly image: FieldRef<"Cart", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    id: number | null
  }

  export type StoreSumAggregateOutputType = {
    id: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: number | null
    nama_toko: string | null
    slug: string | null
    deskripsi: string | null
    telp: string | null
    user_email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    id: number | null
    nama_toko: string | null
    slug: string | null
    deskripsi: string | null
    telp: string | null
    user_email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    nama_toko: number
    slug: number
    deskripsi: number
    telp: number
    user_email: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    id?: true
  }

  export type StoreSumAggregateInputType = {
    id?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    nama_toko?: true
    slug?: true
    deskripsi?: true
    telp?: true
    user_email?: true
    created_at?: true
    updated_at?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    nama_toko?: true
    slug?: true
    deskripsi?: true
    telp?: true
    user_email?: true
    created_at?: true
    updated_at?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    nama_toko?: true
    slug?: true
    deskripsi?: true
    telp?: true
    user_email?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: number
    nama_toko: string
    slug: string | null
    deskripsi: string | null
    telp: string | null
    user_email: string
    created_at: Date
    updated_at: Date
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_toko?: boolean
    slug?: boolean
    deskripsi?: boolean
    telp?: boolean
    user_email?: boolean
    created_at?: boolean
    updated_at?: boolean
    Peripherals?: boolean | Store$PeripheralsArgs<ExtArgs>
    OrderPeripheral?: boolean | Store$OrderPeripheralArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>


  export type StoreSelectScalar = {
    id?: boolean
    nama_toko?: boolean
    slug?: boolean
    deskripsi?: boolean
    telp?: boolean
    user_email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Peripherals?: boolean | Store$PeripheralsArgs<ExtArgs>
    OrderPeripheral?: boolean | Store$OrderPeripheralArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      Peripherals: Prisma.$PeripheralsPayload<ExtArgs>[]
      OrderPeripheral: Prisma.$OrderPeripheralPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_toko: string
      slug: string | null
      deskripsi: string | null
      telp: string | null
      user_email: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Peripherals<T extends Store$PeripheralsArgs<ExtArgs> = {}>(args?: Subset<T, Store$PeripheralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeripheralsPayload<ExtArgs>, T, "findMany"> | Null>
    OrderPeripheral<T extends Store$OrderPeripheralArgs<ExtArgs> = {}>(args?: Subset<T, Store$OrderPeripheralArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPeripheralPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Store model
   */ 
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'Int'>
    readonly nama_toko: FieldRef<"Store", 'String'>
    readonly slug: FieldRef<"Store", 'String'>
    readonly deskripsi: FieldRef<"Store", 'String'>
    readonly telp: FieldRef<"Store", 'String'>
    readonly user_email: FieldRef<"Store", 'String'>
    readonly created_at: FieldRef<"Store", 'DateTime'>
    readonly updated_at: FieldRef<"Store", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
  }

  /**
   * Store.Peripherals
   */
  export type Store$PeripheralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peripherals
     */
    select?: PeripheralsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeripheralsInclude<ExtArgs> | null
    where?: PeripheralsWhereInput
    orderBy?: PeripheralsOrderByWithRelationInput | PeripheralsOrderByWithRelationInput[]
    cursor?: PeripheralsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeripheralsScalarFieldEnum | PeripheralsScalarFieldEnum[]
  }

  /**
   * Store.OrderPeripheral
   */
  export type Store$OrderPeripheralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPeripheral
     */
    select?: OrderPeripheralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPeripheralInclude<ExtArgs> | null
    where?: OrderPeripheralWhereInput
    orderBy?: OrderPeripheralOrderByWithRelationInput | OrderPeripheralOrderByWithRelationInput[]
    cursor?: OrderPeripheralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderPeripheralScalarFieldEnum | OrderPeripheralScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    total_harga: number | null
  }

  export type OrdersSumAggregateOutputType = {
    total_harga: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    user_email: string | null
    total_harga: number | null
    token: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    user_email: string | null
    total_harga: number | null
    token: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    user_email: number
    total_harga: number
    token: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    total_harga?: true
  }

  export type OrdersSumAggregateInputType = {
    total_harga?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    user_email?: true
    total_harga?: true
    token?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    user_email?: true
    total_harga?: true
    token?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    user_email?: true
    total_harga?: true
    token?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    user_email: string
    total_harga: number
    token: string
    status: string
    created_at: Date
    updated_at: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_email?: boolean
    total_harga?: boolean
    token?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    OrderPeripheral?: boolean | Orders$OrderPeripheralArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>


  export type OrdersSelectScalar = {
    id?: boolean
    user_email?: boolean
    total_harga?: boolean
    token?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderPeripheral?: boolean | Orders$OrderPeripheralArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      OrderPeripheral: Prisma.$OrderPeripheralPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_email: string
      total_harga: number
      token: string
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrderPeripheral<T extends Orders$OrderPeripheralArgs<ExtArgs> = {}>(args?: Subset<T, Orders$OrderPeripheralArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPeripheralPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */ 
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'String'>
    readonly user_email: FieldRef<"Orders", 'String'>
    readonly total_harga: FieldRef<"Orders", 'Float'>
    readonly token: FieldRef<"Orders", 'String'>
    readonly status: FieldRef<"Orders", 'String'>
    readonly created_at: FieldRef<"Orders", 'DateTime'>
    readonly updated_at: FieldRef<"Orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
  }

  /**
   * Orders.OrderPeripheral
   */
  export type Orders$OrderPeripheralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPeripheral
     */
    select?: OrderPeripheralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPeripheralInclude<ExtArgs> | null
    where?: OrderPeripheralWhereInput
    orderBy?: OrderPeripheralOrderByWithRelationInput | OrderPeripheralOrderByWithRelationInput[]
    cursor?: OrderPeripheralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderPeripheralScalarFieldEnum | OrderPeripheralScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model OrderPeripheral
   */

  export type AggregateOrderPeripheral = {
    _count: OrderPeripheralCountAggregateOutputType | null
    _avg: OrderPeripheralAvgAggregateOutputType | null
    _sum: OrderPeripheralSumAggregateOutputType | null
    _min: OrderPeripheralMinAggregateOutputType | null
    _max: OrderPeripheralMaxAggregateOutputType | null
  }

  export type OrderPeripheralAvgAggregateOutputType = {
    id: number | null
    peripheralId: number | null
    storeId: number | null
  }

  export type OrderPeripheralSumAggregateOutputType = {
    id: number | null
    peripheralId: number | null
    storeId: number | null
  }

  export type OrderPeripheralMinAggregateOutputType = {
    id: number | null
    orderId: string | null
    peripheralId: number | null
    storeId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderPeripheralMaxAggregateOutputType = {
    id: number | null
    orderId: string | null
    peripheralId: number | null
    storeId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderPeripheralCountAggregateOutputType = {
    id: number
    orderId: number
    peripheralId: number
    storeId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrderPeripheralAvgAggregateInputType = {
    id?: true
    peripheralId?: true
    storeId?: true
  }

  export type OrderPeripheralSumAggregateInputType = {
    id?: true
    peripheralId?: true
    storeId?: true
  }

  export type OrderPeripheralMinAggregateInputType = {
    id?: true
    orderId?: true
    peripheralId?: true
    storeId?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderPeripheralMaxAggregateInputType = {
    id?: true
    orderId?: true
    peripheralId?: true
    storeId?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderPeripheralCountAggregateInputType = {
    id?: true
    orderId?: true
    peripheralId?: true
    storeId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrderPeripheralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderPeripheral to aggregate.
     */
    where?: OrderPeripheralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderPeripherals to fetch.
     */
    orderBy?: OrderPeripheralOrderByWithRelationInput | OrderPeripheralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderPeripheralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderPeripherals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderPeripherals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderPeripherals
    **/
    _count?: true | OrderPeripheralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderPeripheralAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderPeripheralSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderPeripheralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderPeripheralMaxAggregateInputType
  }

  export type GetOrderPeripheralAggregateType<T extends OrderPeripheralAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderPeripheral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderPeripheral[P]>
      : GetScalarType<T[P], AggregateOrderPeripheral[P]>
  }




  export type OrderPeripheralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderPeripheralWhereInput
    orderBy?: OrderPeripheralOrderByWithAggregationInput | OrderPeripheralOrderByWithAggregationInput[]
    by: OrderPeripheralScalarFieldEnum[] | OrderPeripheralScalarFieldEnum
    having?: OrderPeripheralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderPeripheralCountAggregateInputType | true
    _avg?: OrderPeripheralAvgAggregateInputType
    _sum?: OrderPeripheralSumAggregateInputType
    _min?: OrderPeripheralMinAggregateInputType
    _max?: OrderPeripheralMaxAggregateInputType
  }

  export type OrderPeripheralGroupByOutputType = {
    id: number
    orderId: string
    peripheralId: number
    storeId: number
    created_at: Date
    updated_at: Date
    _count: OrderPeripheralCountAggregateOutputType | null
    _avg: OrderPeripheralAvgAggregateOutputType | null
    _sum: OrderPeripheralSumAggregateOutputType | null
    _min: OrderPeripheralMinAggregateOutputType | null
    _max: OrderPeripheralMaxAggregateOutputType | null
  }

  type GetOrderPeripheralGroupByPayload<T extends OrderPeripheralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderPeripheralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderPeripheralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderPeripheralGroupByOutputType[P]>
            : GetScalarType<T[P], OrderPeripheralGroupByOutputType[P]>
        }
      >
    >


  export type OrderPeripheralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    peripheralId?: boolean
    storeId?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
    Peripherals?: boolean | PeripheralsDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderPeripheral"]>


  export type OrderPeripheralSelectScalar = {
    id?: boolean
    orderId?: boolean
    peripheralId?: boolean
    storeId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrderPeripheralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
    Peripherals?: boolean | PeripheralsDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $OrderPeripheralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderPeripheral"
    objects: {
      orders: Prisma.$OrdersPayload<ExtArgs>
      Peripherals: Prisma.$PeripheralsPayload<ExtArgs>
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: string
      peripheralId: number
      storeId: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["orderPeripheral"]>
    composites: {}
  }

  type OrderPeripheralGetPayload<S extends boolean | null | undefined | OrderPeripheralDefaultArgs> = $Result.GetResult<Prisma.$OrderPeripheralPayload, S>

  type OrderPeripheralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderPeripheralFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderPeripheralCountAggregateInputType | true
    }

  export interface OrderPeripheralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderPeripheral'], meta: { name: 'OrderPeripheral' } }
    /**
     * Find zero or one OrderPeripheral that matches the filter.
     * @param {OrderPeripheralFindUniqueArgs} args - Arguments to find a OrderPeripheral
     * @example
     * // Get one OrderPeripheral
     * const orderPeripheral = await prisma.orderPeripheral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderPeripheralFindUniqueArgs>(args: SelectSubset<T, OrderPeripheralFindUniqueArgs<ExtArgs>>): Prisma__OrderPeripheralClient<$Result.GetResult<Prisma.$OrderPeripheralPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderPeripheral that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderPeripheralFindUniqueOrThrowArgs} args - Arguments to find a OrderPeripheral
     * @example
     * // Get one OrderPeripheral
     * const orderPeripheral = await prisma.orderPeripheral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderPeripheralFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderPeripheralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderPeripheralClient<$Result.GetResult<Prisma.$OrderPeripheralPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderPeripheral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPeripheralFindFirstArgs} args - Arguments to find a OrderPeripheral
     * @example
     * // Get one OrderPeripheral
     * const orderPeripheral = await prisma.orderPeripheral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderPeripheralFindFirstArgs>(args?: SelectSubset<T, OrderPeripheralFindFirstArgs<ExtArgs>>): Prisma__OrderPeripheralClient<$Result.GetResult<Prisma.$OrderPeripheralPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderPeripheral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPeripheralFindFirstOrThrowArgs} args - Arguments to find a OrderPeripheral
     * @example
     * // Get one OrderPeripheral
     * const orderPeripheral = await prisma.orderPeripheral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderPeripheralFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderPeripheralFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderPeripheralClient<$Result.GetResult<Prisma.$OrderPeripheralPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderPeripherals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPeripheralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderPeripherals
     * const orderPeripherals = await prisma.orderPeripheral.findMany()
     * 
     * // Get first 10 OrderPeripherals
     * const orderPeripherals = await prisma.orderPeripheral.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderPeripheralWithIdOnly = await prisma.orderPeripheral.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderPeripheralFindManyArgs>(args?: SelectSubset<T, OrderPeripheralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPeripheralPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderPeripheral.
     * @param {OrderPeripheralCreateArgs} args - Arguments to create a OrderPeripheral.
     * @example
     * // Create one OrderPeripheral
     * const OrderPeripheral = await prisma.orderPeripheral.create({
     *   data: {
     *     // ... data to create a OrderPeripheral
     *   }
     * })
     * 
     */
    create<T extends OrderPeripheralCreateArgs>(args: SelectSubset<T, OrderPeripheralCreateArgs<ExtArgs>>): Prisma__OrderPeripheralClient<$Result.GetResult<Prisma.$OrderPeripheralPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderPeripherals.
     * @param {OrderPeripheralCreateManyArgs} args - Arguments to create many OrderPeripherals.
     * @example
     * // Create many OrderPeripherals
     * const orderPeripheral = await prisma.orderPeripheral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderPeripheralCreateManyArgs>(args?: SelectSubset<T, OrderPeripheralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderPeripheral.
     * @param {OrderPeripheralDeleteArgs} args - Arguments to delete one OrderPeripheral.
     * @example
     * // Delete one OrderPeripheral
     * const OrderPeripheral = await prisma.orderPeripheral.delete({
     *   where: {
     *     // ... filter to delete one OrderPeripheral
     *   }
     * })
     * 
     */
    delete<T extends OrderPeripheralDeleteArgs>(args: SelectSubset<T, OrderPeripheralDeleteArgs<ExtArgs>>): Prisma__OrderPeripheralClient<$Result.GetResult<Prisma.$OrderPeripheralPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderPeripheral.
     * @param {OrderPeripheralUpdateArgs} args - Arguments to update one OrderPeripheral.
     * @example
     * // Update one OrderPeripheral
     * const orderPeripheral = await prisma.orderPeripheral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderPeripheralUpdateArgs>(args: SelectSubset<T, OrderPeripheralUpdateArgs<ExtArgs>>): Prisma__OrderPeripheralClient<$Result.GetResult<Prisma.$OrderPeripheralPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderPeripherals.
     * @param {OrderPeripheralDeleteManyArgs} args - Arguments to filter OrderPeripherals to delete.
     * @example
     * // Delete a few OrderPeripherals
     * const { count } = await prisma.orderPeripheral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderPeripheralDeleteManyArgs>(args?: SelectSubset<T, OrderPeripheralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderPeripherals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPeripheralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderPeripherals
     * const orderPeripheral = await prisma.orderPeripheral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderPeripheralUpdateManyArgs>(args: SelectSubset<T, OrderPeripheralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderPeripheral.
     * @param {OrderPeripheralUpsertArgs} args - Arguments to update or create a OrderPeripheral.
     * @example
     * // Update or create a OrderPeripheral
     * const orderPeripheral = await prisma.orderPeripheral.upsert({
     *   create: {
     *     // ... data to create a OrderPeripheral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderPeripheral we want to update
     *   }
     * })
     */
    upsert<T extends OrderPeripheralUpsertArgs>(args: SelectSubset<T, OrderPeripheralUpsertArgs<ExtArgs>>): Prisma__OrderPeripheralClient<$Result.GetResult<Prisma.$OrderPeripheralPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderPeripherals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPeripheralCountArgs} args - Arguments to filter OrderPeripherals to count.
     * @example
     * // Count the number of OrderPeripherals
     * const count = await prisma.orderPeripheral.count({
     *   where: {
     *     // ... the filter for the OrderPeripherals we want to count
     *   }
     * })
    **/
    count<T extends OrderPeripheralCountArgs>(
      args?: Subset<T, OrderPeripheralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderPeripheralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderPeripheral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPeripheralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderPeripheralAggregateArgs>(args: Subset<T, OrderPeripheralAggregateArgs>): Prisma.PrismaPromise<GetOrderPeripheralAggregateType<T>>

    /**
     * Group by OrderPeripheral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPeripheralGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderPeripheralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderPeripheralGroupByArgs['orderBy'] }
        : { orderBy?: OrderPeripheralGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderPeripheralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderPeripheralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderPeripheral model
   */
  readonly fields: OrderPeripheralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderPeripheral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderPeripheralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Peripherals<T extends PeripheralsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeripheralsDefaultArgs<ExtArgs>>): Prisma__PeripheralsClient<$Result.GetResult<Prisma.$PeripheralsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderPeripheral model
   */ 
  interface OrderPeripheralFieldRefs {
    readonly id: FieldRef<"OrderPeripheral", 'Int'>
    readonly orderId: FieldRef<"OrderPeripheral", 'String'>
    readonly peripheralId: FieldRef<"OrderPeripheral", 'Int'>
    readonly storeId: FieldRef<"OrderPeripheral", 'Int'>
    readonly created_at: FieldRef<"OrderPeripheral", 'DateTime'>
    readonly updated_at: FieldRef<"OrderPeripheral", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderPeripheral findUnique
   */
  export type OrderPeripheralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPeripheral
     */
    select?: OrderPeripheralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPeripheralInclude<ExtArgs> | null
    /**
     * Filter, which OrderPeripheral to fetch.
     */
    where: OrderPeripheralWhereUniqueInput
  }

  /**
   * OrderPeripheral findUniqueOrThrow
   */
  export type OrderPeripheralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPeripheral
     */
    select?: OrderPeripheralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPeripheralInclude<ExtArgs> | null
    /**
     * Filter, which OrderPeripheral to fetch.
     */
    where: OrderPeripheralWhereUniqueInput
  }

  /**
   * OrderPeripheral findFirst
   */
  export type OrderPeripheralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPeripheral
     */
    select?: OrderPeripheralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPeripheralInclude<ExtArgs> | null
    /**
     * Filter, which OrderPeripheral to fetch.
     */
    where?: OrderPeripheralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderPeripherals to fetch.
     */
    orderBy?: OrderPeripheralOrderByWithRelationInput | OrderPeripheralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderPeripherals.
     */
    cursor?: OrderPeripheralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderPeripherals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderPeripherals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderPeripherals.
     */
    distinct?: OrderPeripheralScalarFieldEnum | OrderPeripheralScalarFieldEnum[]
  }

  /**
   * OrderPeripheral findFirstOrThrow
   */
  export type OrderPeripheralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPeripheral
     */
    select?: OrderPeripheralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPeripheralInclude<ExtArgs> | null
    /**
     * Filter, which OrderPeripheral to fetch.
     */
    where?: OrderPeripheralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderPeripherals to fetch.
     */
    orderBy?: OrderPeripheralOrderByWithRelationInput | OrderPeripheralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderPeripherals.
     */
    cursor?: OrderPeripheralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderPeripherals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderPeripherals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderPeripherals.
     */
    distinct?: OrderPeripheralScalarFieldEnum | OrderPeripheralScalarFieldEnum[]
  }

  /**
   * OrderPeripheral findMany
   */
  export type OrderPeripheralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPeripheral
     */
    select?: OrderPeripheralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPeripheralInclude<ExtArgs> | null
    /**
     * Filter, which OrderPeripherals to fetch.
     */
    where?: OrderPeripheralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderPeripherals to fetch.
     */
    orderBy?: OrderPeripheralOrderByWithRelationInput | OrderPeripheralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderPeripherals.
     */
    cursor?: OrderPeripheralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderPeripherals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderPeripherals.
     */
    skip?: number
    distinct?: OrderPeripheralScalarFieldEnum | OrderPeripheralScalarFieldEnum[]
  }

  /**
   * OrderPeripheral create
   */
  export type OrderPeripheralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPeripheral
     */
    select?: OrderPeripheralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPeripheralInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderPeripheral.
     */
    data: XOR<OrderPeripheralCreateInput, OrderPeripheralUncheckedCreateInput>
  }

  /**
   * OrderPeripheral createMany
   */
  export type OrderPeripheralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderPeripherals.
     */
    data: OrderPeripheralCreateManyInput | OrderPeripheralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderPeripheral update
   */
  export type OrderPeripheralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPeripheral
     */
    select?: OrderPeripheralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPeripheralInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderPeripheral.
     */
    data: XOR<OrderPeripheralUpdateInput, OrderPeripheralUncheckedUpdateInput>
    /**
     * Choose, which OrderPeripheral to update.
     */
    where: OrderPeripheralWhereUniqueInput
  }

  /**
   * OrderPeripheral updateMany
   */
  export type OrderPeripheralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderPeripherals.
     */
    data: XOR<OrderPeripheralUpdateManyMutationInput, OrderPeripheralUncheckedUpdateManyInput>
    /**
     * Filter which OrderPeripherals to update
     */
    where?: OrderPeripheralWhereInput
  }

  /**
   * OrderPeripheral upsert
   */
  export type OrderPeripheralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPeripheral
     */
    select?: OrderPeripheralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPeripheralInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderPeripheral to update in case it exists.
     */
    where: OrderPeripheralWhereUniqueInput
    /**
     * In case the OrderPeripheral found by the `where` argument doesn't exist, create a new OrderPeripheral with this data.
     */
    create: XOR<OrderPeripheralCreateInput, OrderPeripheralUncheckedCreateInput>
    /**
     * In case the OrderPeripheral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderPeripheralUpdateInput, OrderPeripheralUncheckedUpdateInput>
  }

  /**
   * OrderPeripheral delete
   */
  export type OrderPeripheralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPeripheral
     */
    select?: OrderPeripheralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPeripheralInclude<ExtArgs> | null
    /**
     * Filter which OrderPeripheral to delete.
     */
    where: OrderPeripheralWhereUniqueInput
  }

  /**
   * OrderPeripheral deleteMany
   */
  export type OrderPeripheralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderPeripherals to delete
     */
    where?: OrderPeripheralWhereInput
  }

  /**
   * OrderPeripheral without action
   */
  export type OrderPeripheralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPeripheral
     */
    select?: OrderPeripheralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPeripheralInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PeripheralsScalarFieldEnum: {
    id: 'id',
    nama_peripheral: 'nama_peripheral',
    slug: 'slug',
    deskripsi: 'deskripsi',
    harga: 'harga',
    categories: 'categories',
    image: 'image',
    store_id: 'store_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PeripheralsScalarFieldEnum = (typeof PeripheralsScalarFieldEnum)[keyof typeof PeripheralsScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    id_peripherals: 'id_peripherals',
    user_email: 'user_email',
    nama_peripheral: 'nama_peripheral',
    slug: 'slug',
    harga: 'harga',
    categories: 'categories',
    image: 'image'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    nama_toko: 'nama_toko',
    slug: 'slug',
    deskripsi: 'deskripsi',
    telp: 'telp',
    user_email: 'user_email',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    user_email: 'user_email',
    total_harga: 'total_harga',
    token: 'token',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const OrderPeripheralScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    peripheralId: 'peripheralId',
    storeId: 'storeId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrderPeripheralScalarFieldEnum = (typeof OrderPeripheralScalarFieldEnum)[keyof typeof OrderPeripheralScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type PeripheralsWhereInput = {
    AND?: PeripheralsWhereInput | PeripheralsWhereInput[]
    OR?: PeripheralsWhereInput[]
    NOT?: PeripheralsWhereInput | PeripheralsWhereInput[]
    id?: IntFilter<"Peripherals"> | number
    nama_peripheral?: StringFilter<"Peripherals"> | string
    slug?: StringFilter<"Peripherals"> | string
    deskripsi?: StringFilter<"Peripherals"> | string
    harga?: FloatFilter<"Peripherals"> | number
    categories?: StringFilter<"Peripherals"> | string
    image?: StringNullableFilter<"Peripherals"> | string | null
    store_id?: IntFilter<"Peripherals"> | number
    created_at?: DateTimeFilter<"Peripherals"> | Date | string
    updated_at?: DateTimeFilter<"Peripherals"> | Date | string
    Store?: XOR<StoreNullableRelationFilter, StoreWhereInput> | null
    OrderPeripheral?: OrderPeripheralListRelationFilter
  }

  export type PeripheralsOrderByWithRelationInput = {
    id?: SortOrder
    nama_peripheral?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrderInput | SortOrder
    store_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Store?: StoreOrderByWithRelationInput
    OrderPeripheral?: OrderPeripheralOrderByRelationAggregateInput
  }

  export type PeripheralsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: PeripheralsWhereInput | PeripheralsWhereInput[]
    OR?: PeripheralsWhereInput[]
    NOT?: PeripheralsWhereInput | PeripheralsWhereInput[]
    nama_peripheral?: StringFilter<"Peripherals"> | string
    deskripsi?: StringFilter<"Peripherals"> | string
    harga?: FloatFilter<"Peripherals"> | number
    categories?: StringFilter<"Peripherals"> | string
    image?: StringNullableFilter<"Peripherals"> | string | null
    store_id?: IntFilter<"Peripherals"> | number
    created_at?: DateTimeFilter<"Peripherals"> | Date | string
    updated_at?: DateTimeFilter<"Peripherals"> | Date | string
    Store?: XOR<StoreNullableRelationFilter, StoreWhereInput> | null
    OrderPeripheral?: OrderPeripheralListRelationFilter
  }, "id" | "slug">

  export type PeripheralsOrderByWithAggregationInput = {
    id?: SortOrder
    nama_peripheral?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrderInput | SortOrder
    store_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PeripheralsCountOrderByAggregateInput
    _avg?: PeripheralsAvgOrderByAggregateInput
    _max?: PeripheralsMaxOrderByAggregateInput
    _min?: PeripheralsMinOrderByAggregateInput
    _sum?: PeripheralsSumOrderByAggregateInput
  }

  export type PeripheralsScalarWhereWithAggregatesInput = {
    AND?: PeripheralsScalarWhereWithAggregatesInput | PeripheralsScalarWhereWithAggregatesInput[]
    OR?: PeripheralsScalarWhereWithAggregatesInput[]
    NOT?: PeripheralsScalarWhereWithAggregatesInput | PeripheralsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Peripherals"> | number
    nama_peripheral?: StringWithAggregatesFilter<"Peripherals"> | string
    slug?: StringWithAggregatesFilter<"Peripherals"> | string
    deskripsi?: StringWithAggregatesFilter<"Peripherals"> | string
    harga?: FloatWithAggregatesFilter<"Peripherals"> | number
    categories?: StringWithAggregatesFilter<"Peripherals"> | string
    image?: StringNullableWithAggregatesFilter<"Peripherals"> | string | null
    store_id?: IntWithAggregatesFilter<"Peripherals"> | number
    created_at?: DateTimeWithAggregatesFilter<"Peripherals"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Peripherals"> | Date | string
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: IntFilter<"Cart"> | number
    id_peripherals?: IntFilter<"Cart"> | number
    user_email?: StringNullableFilter<"Cart"> | string | null
    nama_peripheral?: StringFilter<"Cart"> | string
    slug?: StringFilter<"Cart"> | string
    harga?: FloatFilter<"Cart"> | number
    categories?: StringFilter<"Cart"> | string
    image?: StringNullableFilter<"Cart"> | string | null
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    id_peripherals?: SortOrder
    user_email?: SortOrderInput | SortOrder
    nama_peripheral?: SortOrder
    slug?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrderInput | SortOrder
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug_user_email?: CartSlugUser_emailCompoundUniqueInput
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id_peripherals?: IntFilter<"Cart"> | number
    user_email?: StringNullableFilter<"Cart"> | string | null
    nama_peripheral?: StringFilter<"Cart"> | string
    slug?: StringFilter<"Cart"> | string
    harga?: FloatFilter<"Cart"> | number
    categories?: StringFilter<"Cart"> | string
    image?: StringNullableFilter<"Cart"> | string | null
  }, "id" | "slug_user_email">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    id_peripherals?: SortOrder
    user_email?: SortOrderInput | SortOrder
    nama_peripheral?: SortOrder
    slug?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cart"> | number
    id_peripherals?: IntWithAggregatesFilter<"Cart"> | number
    user_email?: StringNullableWithAggregatesFilter<"Cart"> | string | null
    nama_peripheral?: StringWithAggregatesFilter<"Cart"> | string
    slug?: StringWithAggregatesFilter<"Cart"> | string
    harga?: FloatWithAggregatesFilter<"Cart"> | number
    categories?: StringWithAggregatesFilter<"Cart"> | string
    image?: StringNullableWithAggregatesFilter<"Cart"> | string | null
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: IntFilter<"Store"> | number
    nama_toko?: StringFilter<"Store"> | string
    slug?: StringNullableFilter<"Store"> | string | null
    deskripsi?: StringNullableFilter<"Store"> | string | null
    telp?: StringNullableFilter<"Store"> | string | null
    user_email?: StringFilter<"Store"> | string
    created_at?: DateTimeFilter<"Store"> | Date | string
    updated_at?: DateTimeFilter<"Store"> | Date | string
    Peripherals?: PeripheralsListRelationFilter
    OrderPeripheral?: OrderPeripheralListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    nama_toko?: SortOrder
    slug?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    telp?: SortOrderInput | SortOrder
    user_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Peripherals?: PeripheralsOrderByRelationAggregateInput
    OrderPeripheral?: OrderPeripheralOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    nama_toko?: StringFilter<"Store"> | string
    deskripsi?: StringNullableFilter<"Store"> | string | null
    telp?: StringNullableFilter<"Store"> | string | null
    user_email?: StringFilter<"Store"> | string
    created_at?: DateTimeFilter<"Store"> | Date | string
    updated_at?: DateTimeFilter<"Store"> | Date | string
    Peripherals?: PeripheralsListRelationFilter
    OrderPeripheral?: OrderPeripheralListRelationFilter
  }, "id" | "slug">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    nama_toko?: SortOrder
    slug?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    telp?: SortOrderInput | SortOrder
    user_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Store"> | number
    nama_toko?: StringWithAggregatesFilter<"Store"> | string
    slug?: StringNullableWithAggregatesFilter<"Store"> | string | null
    deskripsi?: StringNullableWithAggregatesFilter<"Store"> | string | null
    telp?: StringNullableWithAggregatesFilter<"Store"> | string | null
    user_email?: StringWithAggregatesFilter<"Store"> | string
    created_at?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Store"> | Date | string
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: StringFilter<"Orders"> | string
    user_email?: StringFilter<"Orders"> | string
    total_harga?: FloatFilter<"Orders"> | number
    token?: StringFilter<"Orders"> | string
    status?: StringFilter<"Orders"> | string
    created_at?: DateTimeFilter<"Orders"> | Date | string
    updated_at?: DateTimeFilter<"Orders"> | Date | string
    OrderPeripheral?: OrderPeripheralListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    user_email?: SortOrder
    total_harga?: SortOrder
    token?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    OrderPeripheral?: OrderPeripheralOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    user_email?: StringFilter<"Orders"> | string
    total_harga?: FloatFilter<"Orders"> | number
    token?: StringFilter<"Orders"> | string
    status?: StringFilter<"Orders"> | string
    created_at?: DateTimeFilter<"Orders"> | Date | string
    updated_at?: DateTimeFilter<"Orders"> | Date | string
    OrderPeripheral?: OrderPeripheralListRelationFilter
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    user_email?: SortOrder
    total_harga?: SortOrder
    token?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Orders"> | string
    user_email?: StringWithAggregatesFilter<"Orders"> | string
    total_harga?: FloatWithAggregatesFilter<"Orders"> | number
    token?: StringWithAggregatesFilter<"Orders"> | string
    status?: StringWithAggregatesFilter<"Orders"> | string
    created_at?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
  }

  export type OrderPeripheralWhereInput = {
    AND?: OrderPeripheralWhereInput | OrderPeripheralWhereInput[]
    OR?: OrderPeripheralWhereInput[]
    NOT?: OrderPeripheralWhereInput | OrderPeripheralWhereInput[]
    id?: IntFilter<"OrderPeripheral"> | number
    orderId?: StringFilter<"OrderPeripheral"> | string
    peripheralId?: IntFilter<"OrderPeripheral"> | number
    storeId?: IntFilter<"OrderPeripheral"> | number
    created_at?: DateTimeFilter<"OrderPeripheral"> | Date | string
    updated_at?: DateTimeFilter<"OrderPeripheral"> | Date | string
    orders?: XOR<OrdersRelationFilter, OrdersWhereInput>
    Peripherals?: XOR<PeripheralsRelationFilter, PeripheralsWhereInput>
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }

  export type OrderPeripheralOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    peripheralId?: SortOrder
    storeId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    orders?: OrdersOrderByWithRelationInput
    Peripherals?: PeripheralsOrderByWithRelationInput
    store?: StoreOrderByWithRelationInput
  }

  export type OrderPeripheralWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderPeripheralWhereInput | OrderPeripheralWhereInput[]
    OR?: OrderPeripheralWhereInput[]
    NOT?: OrderPeripheralWhereInput | OrderPeripheralWhereInput[]
    orderId?: StringFilter<"OrderPeripheral"> | string
    peripheralId?: IntFilter<"OrderPeripheral"> | number
    storeId?: IntFilter<"OrderPeripheral"> | number
    created_at?: DateTimeFilter<"OrderPeripheral"> | Date | string
    updated_at?: DateTimeFilter<"OrderPeripheral"> | Date | string
    orders?: XOR<OrdersRelationFilter, OrdersWhereInput>
    Peripherals?: XOR<PeripheralsRelationFilter, PeripheralsWhereInput>
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }, "id">

  export type OrderPeripheralOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    peripheralId?: SortOrder
    storeId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OrderPeripheralCountOrderByAggregateInput
    _avg?: OrderPeripheralAvgOrderByAggregateInput
    _max?: OrderPeripheralMaxOrderByAggregateInput
    _min?: OrderPeripheralMinOrderByAggregateInput
    _sum?: OrderPeripheralSumOrderByAggregateInput
  }

  export type OrderPeripheralScalarWhereWithAggregatesInput = {
    AND?: OrderPeripheralScalarWhereWithAggregatesInput | OrderPeripheralScalarWhereWithAggregatesInput[]
    OR?: OrderPeripheralScalarWhereWithAggregatesInput[]
    NOT?: OrderPeripheralScalarWhereWithAggregatesInput | OrderPeripheralScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderPeripheral"> | number
    orderId?: StringWithAggregatesFilter<"OrderPeripheral"> | string
    peripheralId?: IntWithAggregatesFilter<"OrderPeripheral"> | number
    storeId?: IntWithAggregatesFilter<"OrderPeripheral"> | number
    created_at?: DateTimeWithAggregatesFilter<"OrderPeripheral"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"OrderPeripheral"> | Date | string
  }

  export type PeripheralsCreateInput = {
    nama_peripheral: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Store?: StoreCreateNestedOneWithoutPeripheralsInput
    OrderPeripheral?: OrderPeripheralCreateNestedManyWithoutPeripheralsInput
  }

  export type PeripheralsUncheckedCreateInput = {
    id?: number
    nama_peripheral: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    store_id: number
    created_at?: Date | string
    updated_at?: Date | string
    OrderPeripheral?: OrderPeripheralUncheckedCreateNestedManyWithoutPeripheralsInput
  }

  export type PeripheralsUpdateInput = {
    nama_peripheral?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Store?: StoreUpdateOneWithoutPeripheralsNestedInput
    OrderPeripheral?: OrderPeripheralUpdateManyWithoutPeripheralsNestedInput
  }

  export type PeripheralsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_peripheral?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderPeripheral?: OrderPeripheralUncheckedUpdateManyWithoutPeripheralsNestedInput
  }

  export type PeripheralsCreateManyInput = {
    id?: number
    nama_peripheral: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    store_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PeripheralsUpdateManyMutationInput = {
    nama_peripheral?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeripheralsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_peripheral?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateInput = {
    id_peripherals: number
    user_email?: string | null
    nama_peripheral: string
    slug: string
    harga: number
    categories: string
    image?: string | null
  }

  export type CartUncheckedCreateInput = {
    id?: number
    id_peripherals: number
    user_email?: string | null
    nama_peripheral: string
    slug: string
    harga: number
    categories: string
    image?: string | null
  }

  export type CartUpdateInput = {
    id_peripherals?: IntFieldUpdateOperationsInput | number
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    nama_peripheral?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_peripherals?: IntFieldUpdateOperationsInput | number
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    nama_peripheral?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartCreateManyInput = {
    id?: number
    id_peripherals: number
    user_email?: string | null
    nama_peripheral: string
    slug: string
    harga: number
    categories: string
    image?: string | null
  }

  export type CartUpdateManyMutationInput = {
    id_peripherals?: IntFieldUpdateOperationsInput | number
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    nama_peripheral?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_peripherals?: IntFieldUpdateOperationsInput | number
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    nama_peripheral?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoreCreateInput = {
    nama_toko: string
    slug?: string | null
    deskripsi?: string | null
    telp?: string | null
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string
    Peripherals?: PeripheralsCreateNestedManyWithoutStoreInput
    OrderPeripheral?: OrderPeripheralCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: number
    nama_toko: string
    slug?: string | null
    deskripsi?: string | null
    telp?: string | null
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string
    Peripherals?: PeripheralsUncheckedCreateNestedManyWithoutStoreInput
    OrderPeripheral?: OrderPeripheralUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Peripherals?: PeripheralsUpdateManyWithoutStoreNestedInput
    OrderPeripheral?: OrderPeripheralUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Peripherals?: PeripheralsUncheckedUpdateManyWithoutStoreNestedInput
    OrderPeripheral?: OrderPeripheralUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: number
    nama_toko: string
    slug?: string | null
    deskripsi?: string | null
    telp?: string | null
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StoreUpdateManyMutationInput = {
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateInput = {
    id: string
    user_email: string
    total_harga: number
    token: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    OrderPeripheral?: OrderPeripheralCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    id: string
    user_email: string
    total_harga: number
    token: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    OrderPeripheral?: OrderPeripheralUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    total_harga?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderPeripheral?: OrderPeripheralUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    total_harga?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderPeripheral?: OrderPeripheralUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersCreateManyInput = {
    id: string
    user_email: string
    total_harga: number
    token: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrdersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    total_harga?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    total_harga?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderPeripheralCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    orders: OrdersCreateNestedOneWithoutOrderPeripheralInput
    Peripherals: PeripheralsCreateNestedOneWithoutOrderPeripheralInput
    store: StoreCreateNestedOneWithoutOrderPeripheralInput
  }

  export type OrderPeripheralUncheckedCreateInput = {
    id?: number
    orderId: string
    peripheralId: number
    storeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderPeripheralUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateOneRequiredWithoutOrderPeripheralNestedInput
    Peripherals?: PeripheralsUpdateOneRequiredWithoutOrderPeripheralNestedInput
    store?: StoreUpdateOneRequiredWithoutOrderPeripheralNestedInput
  }

  export type OrderPeripheralUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    peripheralId?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderPeripheralCreateManyInput = {
    id?: number
    orderId: string
    peripheralId: number
    storeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderPeripheralUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderPeripheralUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    peripheralId?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StoreNullableRelationFilter = {
    is?: StoreWhereInput | null
    isNot?: StoreWhereInput | null
  }

  export type OrderPeripheralListRelationFilter = {
    every?: OrderPeripheralWhereInput
    some?: OrderPeripheralWhereInput
    none?: OrderPeripheralWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderPeripheralOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeripheralsCountOrderByAggregateInput = {
    id?: SortOrder
    nama_peripheral?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrder
    store_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PeripheralsAvgOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    store_id?: SortOrder
  }

  export type PeripheralsMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_peripheral?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrder
    store_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PeripheralsMinOrderByAggregateInput = {
    id?: SortOrder
    nama_peripheral?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrder
    store_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PeripheralsSumOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    store_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CartSlugUser_emailCompoundUniqueInput = {
    slug: string
    user_email: string
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    id_peripherals?: SortOrder
    user_email?: SortOrder
    nama_peripheral?: SortOrder
    slug?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    id?: SortOrder
    id_peripherals?: SortOrder
    harga?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    id_peripherals?: SortOrder
    user_email?: SortOrder
    nama_peripheral?: SortOrder
    slug?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    id_peripherals?: SortOrder
    user_email?: SortOrder
    nama_peripheral?: SortOrder
    slug?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    id?: SortOrder
    id_peripherals?: SortOrder
    harga?: SortOrder
  }

  export type PeripheralsListRelationFilter = {
    every?: PeripheralsWhereInput
    some?: PeripheralsWhereInput
    none?: PeripheralsWhereInput
  }

  export type PeripheralsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    nama_toko?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    telp?: SortOrder
    user_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_toko?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    telp?: SortOrder
    user_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    nama_toko?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    telp?: SortOrder
    user_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    user_email?: SortOrder
    total_harga?: SortOrder
    token?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    total_harga?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_email?: SortOrder
    total_harga?: SortOrder
    token?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    user_email?: SortOrder
    total_harga?: SortOrder
    token?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    total_harga?: SortOrder
  }

  export type OrdersRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type PeripheralsRelationFilter = {
    is?: PeripheralsWhereInput
    isNot?: PeripheralsWhereInput
  }

  export type StoreRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type OrderPeripheralCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    peripheralId?: SortOrder
    storeId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderPeripheralAvgOrderByAggregateInput = {
    id?: SortOrder
    peripheralId?: SortOrder
    storeId?: SortOrder
  }

  export type OrderPeripheralMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    peripheralId?: SortOrder
    storeId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderPeripheralMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    peripheralId?: SortOrder
    storeId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderPeripheralSumOrderByAggregateInput = {
    id?: SortOrder
    peripheralId?: SortOrder
    storeId?: SortOrder
  }

  export type StoreCreateNestedOneWithoutPeripheralsInput = {
    create?: XOR<StoreCreateWithoutPeripheralsInput, StoreUncheckedCreateWithoutPeripheralsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutPeripheralsInput
    connect?: StoreWhereUniqueInput
  }

  export type OrderPeripheralCreateNestedManyWithoutPeripheralsInput = {
    create?: XOR<OrderPeripheralCreateWithoutPeripheralsInput, OrderPeripheralUncheckedCreateWithoutPeripheralsInput> | OrderPeripheralCreateWithoutPeripheralsInput[] | OrderPeripheralUncheckedCreateWithoutPeripheralsInput[]
    connectOrCreate?: OrderPeripheralCreateOrConnectWithoutPeripheralsInput | OrderPeripheralCreateOrConnectWithoutPeripheralsInput[]
    createMany?: OrderPeripheralCreateManyPeripheralsInputEnvelope
    connect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
  }

  export type OrderPeripheralUncheckedCreateNestedManyWithoutPeripheralsInput = {
    create?: XOR<OrderPeripheralCreateWithoutPeripheralsInput, OrderPeripheralUncheckedCreateWithoutPeripheralsInput> | OrderPeripheralCreateWithoutPeripheralsInput[] | OrderPeripheralUncheckedCreateWithoutPeripheralsInput[]
    connectOrCreate?: OrderPeripheralCreateOrConnectWithoutPeripheralsInput | OrderPeripheralCreateOrConnectWithoutPeripheralsInput[]
    createMany?: OrderPeripheralCreateManyPeripheralsInputEnvelope
    connect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StoreUpdateOneWithoutPeripheralsNestedInput = {
    create?: XOR<StoreCreateWithoutPeripheralsInput, StoreUncheckedCreateWithoutPeripheralsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutPeripheralsInput
    upsert?: StoreUpsertWithoutPeripheralsInput
    disconnect?: StoreWhereInput | boolean
    delete?: StoreWhereInput | boolean
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutPeripheralsInput, StoreUpdateWithoutPeripheralsInput>, StoreUncheckedUpdateWithoutPeripheralsInput>
  }

  export type OrderPeripheralUpdateManyWithoutPeripheralsNestedInput = {
    create?: XOR<OrderPeripheralCreateWithoutPeripheralsInput, OrderPeripheralUncheckedCreateWithoutPeripheralsInput> | OrderPeripheralCreateWithoutPeripheralsInput[] | OrderPeripheralUncheckedCreateWithoutPeripheralsInput[]
    connectOrCreate?: OrderPeripheralCreateOrConnectWithoutPeripheralsInput | OrderPeripheralCreateOrConnectWithoutPeripheralsInput[]
    upsert?: OrderPeripheralUpsertWithWhereUniqueWithoutPeripheralsInput | OrderPeripheralUpsertWithWhereUniqueWithoutPeripheralsInput[]
    createMany?: OrderPeripheralCreateManyPeripheralsInputEnvelope
    set?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    disconnect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    delete?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    connect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    update?: OrderPeripheralUpdateWithWhereUniqueWithoutPeripheralsInput | OrderPeripheralUpdateWithWhereUniqueWithoutPeripheralsInput[]
    updateMany?: OrderPeripheralUpdateManyWithWhereWithoutPeripheralsInput | OrderPeripheralUpdateManyWithWhereWithoutPeripheralsInput[]
    deleteMany?: OrderPeripheralScalarWhereInput | OrderPeripheralScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderPeripheralUncheckedUpdateManyWithoutPeripheralsNestedInput = {
    create?: XOR<OrderPeripheralCreateWithoutPeripheralsInput, OrderPeripheralUncheckedCreateWithoutPeripheralsInput> | OrderPeripheralCreateWithoutPeripheralsInput[] | OrderPeripheralUncheckedCreateWithoutPeripheralsInput[]
    connectOrCreate?: OrderPeripheralCreateOrConnectWithoutPeripheralsInput | OrderPeripheralCreateOrConnectWithoutPeripheralsInput[]
    upsert?: OrderPeripheralUpsertWithWhereUniqueWithoutPeripheralsInput | OrderPeripheralUpsertWithWhereUniqueWithoutPeripheralsInput[]
    createMany?: OrderPeripheralCreateManyPeripheralsInputEnvelope
    set?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    disconnect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    delete?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    connect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    update?: OrderPeripheralUpdateWithWhereUniqueWithoutPeripheralsInput | OrderPeripheralUpdateWithWhereUniqueWithoutPeripheralsInput[]
    updateMany?: OrderPeripheralUpdateManyWithWhereWithoutPeripheralsInput | OrderPeripheralUpdateManyWithWhereWithoutPeripheralsInput[]
    deleteMany?: OrderPeripheralScalarWhereInput | OrderPeripheralScalarWhereInput[]
  }

  export type PeripheralsCreateNestedManyWithoutStoreInput = {
    create?: XOR<PeripheralsCreateWithoutStoreInput, PeripheralsUncheckedCreateWithoutStoreInput> | PeripheralsCreateWithoutStoreInput[] | PeripheralsUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: PeripheralsCreateOrConnectWithoutStoreInput | PeripheralsCreateOrConnectWithoutStoreInput[]
    createMany?: PeripheralsCreateManyStoreInputEnvelope
    connect?: PeripheralsWhereUniqueInput | PeripheralsWhereUniqueInput[]
  }

  export type OrderPeripheralCreateNestedManyWithoutStoreInput = {
    create?: XOR<OrderPeripheralCreateWithoutStoreInput, OrderPeripheralUncheckedCreateWithoutStoreInput> | OrderPeripheralCreateWithoutStoreInput[] | OrderPeripheralUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderPeripheralCreateOrConnectWithoutStoreInput | OrderPeripheralCreateOrConnectWithoutStoreInput[]
    createMany?: OrderPeripheralCreateManyStoreInputEnvelope
    connect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
  }

  export type PeripheralsUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<PeripheralsCreateWithoutStoreInput, PeripheralsUncheckedCreateWithoutStoreInput> | PeripheralsCreateWithoutStoreInput[] | PeripheralsUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: PeripheralsCreateOrConnectWithoutStoreInput | PeripheralsCreateOrConnectWithoutStoreInput[]
    createMany?: PeripheralsCreateManyStoreInputEnvelope
    connect?: PeripheralsWhereUniqueInput | PeripheralsWhereUniqueInput[]
  }

  export type OrderPeripheralUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<OrderPeripheralCreateWithoutStoreInput, OrderPeripheralUncheckedCreateWithoutStoreInput> | OrderPeripheralCreateWithoutStoreInput[] | OrderPeripheralUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderPeripheralCreateOrConnectWithoutStoreInput | OrderPeripheralCreateOrConnectWithoutStoreInput[]
    createMany?: OrderPeripheralCreateManyStoreInputEnvelope
    connect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
  }

  export type PeripheralsUpdateManyWithoutStoreNestedInput = {
    create?: XOR<PeripheralsCreateWithoutStoreInput, PeripheralsUncheckedCreateWithoutStoreInput> | PeripheralsCreateWithoutStoreInput[] | PeripheralsUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: PeripheralsCreateOrConnectWithoutStoreInput | PeripheralsCreateOrConnectWithoutStoreInput[]
    upsert?: PeripheralsUpsertWithWhereUniqueWithoutStoreInput | PeripheralsUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: PeripheralsCreateManyStoreInputEnvelope
    set?: PeripheralsWhereUniqueInput | PeripheralsWhereUniqueInput[]
    disconnect?: PeripheralsWhereUniqueInput | PeripheralsWhereUniqueInput[]
    delete?: PeripheralsWhereUniqueInput | PeripheralsWhereUniqueInput[]
    connect?: PeripheralsWhereUniqueInput | PeripheralsWhereUniqueInput[]
    update?: PeripheralsUpdateWithWhereUniqueWithoutStoreInput | PeripheralsUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: PeripheralsUpdateManyWithWhereWithoutStoreInput | PeripheralsUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: PeripheralsScalarWhereInput | PeripheralsScalarWhereInput[]
  }

  export type OrderPeripheralUpdateManyWithoutStoreNestedInput = {
    create?: XOR<OrderPeripheralCreateWithoutStoreInput, OrderPeripheralUncheckedCreateWithoutStoreInput> | OrderPeripheralCreateWithoutStoreInput[] | OrderPeripheralUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderPeripheralCreateOrConnectWithoutStoreInput | OrderPeripheralCreateOrConnectWithoutStoreInput[]
    upsert?: OrderPeripheralUpsertWithWhereUniqueWithoutStoreInput | OrderPeripheralUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: OrderPeripheralCreateManyStoreInputEnvelope
    set?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    disconnect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    delete?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    connect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    update?: OrderPeripheralUpdateWithWhereUniqueWithoutStoreInput | OrderPeripheralUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: OrderPeripheralUpdateManyWithWhereWithoutStoreInput | OrderPeripheralUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: OrderPeripheralScalarWhereInput | OrderPeripheralScalarWhereInput[]
  }

  export type PeripheralsUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<PeripheralsCreateWithoutStoreInput, PeripheralsUncheckedCreateWithoutStoreInput> | PeripheralsCreateWithoutStoreInput[] | PeripheralsUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: PeripheralsCreateOrConnectWithoutStoreInput | PeripheralsCreateOrConnectWithoutStoreInput[]
    upsert?: PeripheralsUpsertWithWhereUniqueWithoutStoreInput | PeripheralsUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: PeripheralsCreateManyStoreInputEnvelope
    set?: PeripheralsWhereUniqueInput | PeripheralsWhereUniqueInput[]
    disconnect?: PeripheralsWhereUniqueInput | PeripheralsWhereUniqueInput[]
    delete?: PeripheralsWhereUniqueInput | PeripheralsWhereUniqueInput[]
    connect?: PeripheralsWhereUniqueInput | PeripheralsWhereUniqueInput[]
    update?: PeripheralsUpdateWithWhereUniqueWithoutStoreInput | PeripheralsUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: PeripheralsUpdateManyWithWhereWithoutStoreInput | PeripheralsUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: PeripheralsScalarWhereInput | PeripheralsScalarWhereInput[]
  }

  export type OrderPeripheralUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<OrderPeripheralCreateWithoutStoreInput, OrderPeripheralUncheckedCreateWithoutStoreInput> | OrderPeripheralCreateWithoutStoreInput[] | OrderPeripheralUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderPeripheralCreateOrConnectWithoutStoreInput | OrderPeripheralCreateOrConnectWithoutStoreInput[]
    upsert?: OrderPeripheralUpsertWithWhereUniqueWithoutStoreInput | OrderPeripheralUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: OrderPeripheralCreateManyStoreInputEnvelope
    set?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    disconnect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    delete?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    connect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    update?: OrderPeripheralUpdateWithWhereUniqueWithoutStoreInput | OrderPeripheralUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: OrderPeripheralUpdateManyWithWhereWithoutStoreInput | OrderPeripheralUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: OrderPeripheralScalarWhereInput | OrderPeripheralScalarWhereInput[]
  }

  export type OrderPeripheralCreateNestedManyWithoutOrdersInput = {
    create?: XOR<OrderPeripheralCreateWithoutOrdersInput, OrderPeripheralUncheckedCreateWithoutOrdersInput> | OrderPeripheralCreateWithoutOrdersInput[] | OrderPeripheralUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderPeripheralCreateOrConnectWithoutOrdersInput | OrderPeripheralCreateOrConnectWithoutOrdersInput[]
    createMany?: OrderPeripheralCreateManyOrdersInputEnvelope
    connect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
  }

  export type OrderPeripheralUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<OrderPeripheralCreateWithoutOrdersInput, OrderPeripheralUncheckedCreateWithoutOrdersInput> | OrderPeripheralCreateWithoutOrdersInput[] | OrderPeripheralUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderPeripheralCreateOrConnectWithoutOrdersInput | OrderPeripheralCreateOrConnectWithoutOrdersInput[]
    createMany?: OrderPeripheralCreateManyOrdersInputEnvelope
    connect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
  }

  export type OrderPeripheralUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<OrderPeripheralCreateWithoutOrdersInput, OrderPeripheralUncheckedCreateWithoutOrdersInput> | OrderPeripheralCreateWithoutOrdersInput[] | OrderPeripheralUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderPeripheralCreateOrConnectWithoutOrdersInput | OrderPeripheralCreateOrConnectWithoutOrdersInput[]
    upsert?: OrderPeripheralUpsertWithWhereUniqueWithoutOrdersInput | OrderPeripheralUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: OrderPeripheralCreateManyOrdersInputEnvelope
    set?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    disconnect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    delete?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    connect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    update?: OrderPeripheralUpdateWithWhereUniqueWithoutOrdersInput | OrderPeripheralUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: OrderPeripheralUpdateManyWithWhereWithoutOrdersInput | OrderPeripheralUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: OrderPeripheralScalarWhereInput | OrderPeripheralScalarWhereInput[]
  }

  export type OrderPeripheralUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<OrderPeripheralCreateWithoutOrdersInput, OrderPeripheralUncheckedCreateWithoutOrdersInput> | OrderPeripheralCreateWithoutOrdersInput[] | OrderPeripheralUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderPeripheralCreateOrConnectWithoutOrdersInput | OrderPeripheralCreateOrConnectWithoutOrdersInput[]
    upsert?: OrderPeripheralUpsertWithWhereUniqueWithoutOrdersInput | OrderPeripheralUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: OrderPeripheralCreateManyOrdersInputEnvelope
    set?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    disconnect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    delete?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    connect?: OrderPeripheralWhereUniqueInput | OrderPeripheralWhereUniqueInput[]
    update?: OrderPeripheralUpdateWithWhereUniqueWithoutOrdersInput | OrderPeripheralUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: OrderPeripheralUpdateManyWithWhereWithoutOrdersInput | OrderPeripheralUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: OrderPeripheralScalarWhereInput | OrderPeripheralScalarWhereInput[]
  }

  export type OrdersCreateNestedOneWithoutOrderPeripheralInput = {
    create?: XOR<OrdersCreateWithoutOrderPeripheralInput, OrdersUncheckedCreateWithoutOrderPeripheralInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderPeripheralInput
    connect?: OrdersWhereUniqueInput
  }

  export type PeripheralsCreateNestedOneWithoutOrderPeripheralInput = {
    create?: XOR<PeripheralsCreateWithoutOrderPeripheralInput, PeripheralsUncheckedCreateWithoutOrderPeripheralInput>
    connectOrCreate?: PeripheralsCreateOrConnectWithoutOrderPeripheralInput
    connect?: PeripheralsWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutOrderPeripheralInput = {
    create?: XOR<StoreCreateWithoutOrderPeripheralInput, StoreUncheckedCreateWithoutOrderPeripheralInput>
    connectOrCreate?: StoreCreateOrConnectWithoutOrderPeripheralInput
    connect?: StoreWhereUniqueInput
  }

  export type OrdersUpdateOneRequiredWithoutOrderPeripheralNestedInput = {
    create?: XOR<OrdersCreateWithoutOrderPeripheralInput, OrdersUncheckedCreateWithoutOrderPeripheralInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderPeripheralInput
    upsert?: OrdersUpsertWithoutOrderPeripheralInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrderPeripheralInput, OrdersUpdateWithoutOrderPeripheralInput>, OrdersUncheckedUpdateWithoutOrderPeripheralInput>
  }

  export type PeripheralsUpdateOneRequiredWithoutOrderPeripheralNestedInput = {
    create?: XOR<PeripheralsCreateWithoutOrderPeripheralInput, PeripheralsUncheckedCreateWithoutOrderPeripheralInput>
    connectOrCreate?: PeripheralsCreateOrConnectWithoutOrderPeripheralInput
    upsert?: PeripheralsUpsertWithoutOrderPeripheralInput
    connect?: PeripheralsWhereUniqueInput
    update?: XOR<XOR<PeripheralsUpdateToOneWithWhereWithoutOrderPeripheralInput, PeripheralsUpdateWithoutOrderPeripheralInput>, PeripheralsUncheckedUpdateWithoutOrderPeripheralInput>
  }

  export type StoreUpdateOneRequiredWithoutOrderPeripheralNestedInput = {
    create?: XOR<StoreCreateWithoutOrderPeripheralInput, StoreUncheckedCreateWithoutOrderPeripheralInput>
    connectOrCreate?: StoreCreateOrConnectWithoutOrderPeripheralInput
    upsert?: StoreUpsertWithoutOrderPeripheralInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutOrderPeripheralInput, StoreUpdateWithoutOrderPeripheralInput>, StoreUncheckedUpdateWithoutOrderPeripheralInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StoreCreateWithoutPeripheralsInput = {
    nama_toko: string
    slug?: string | null
    deskripsi?: string | null
    telp?: string | null
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string
    OrderPeripheral?: OrderPeripheralCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutPeripheralsInput = {
    id?: number
    nama_toko: string
    slug?: string | null
    deskripsi?: string | null
    telp?: string | null
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string
    OrderPeripheral?: OrderPeripheralUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutPeripheralsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutPeripheralsInput, StoreUncheckedCreateWithoutPeripheralsInput>
  }

  export type OrderPeripheralCreateWithoutPeripheralsInput = {
    created_at?: Date | string
    updated_at?: Date | string
    orders: OrdersCreateNestedOneWithoutOrderPeripheralInput
    store: StoreCreateNestedOneWithoutOrderPeripheralInput
  }

  export type OrderPeripheralUncheckedCreateWithoutPeripheralsInput = {
    id?: number
    orderId: string
    storeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderPeripheralCreateOrConnectWithoutPeripheralsInput = {
    where: OrderPeripheralWhereUniqueInput
    create: XOR<OrderPeripheralCreateWithoutPeripheralsInput, OrderPeripheralUncheckedCreateWithoutPeripheralsInput>
  }

  export type OrderPeripheralCreateManyPeripheralsInputEnvelope = {
    data: OrderPeripheralCreateManyPeripheralsInput | OrderPeripheralCreateManyPeripheralsInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutPeripheralsInput = {
    update: XOR<StoreUpdateWithoutPeripheralsInput, StoreUncheckedUpdateWithoutPeripheralsInput>
    create: XOR<StoreCreateWithoutPeripheralsInput, StoreUncheckedCreateWithoutPeripheralsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutPeripheralsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutPeripheralsInput, StoreUncheckedUpdateWithoutPeripheralsInput>
  }

  export type StoreUpdateWithoutPeripheralsInput = {
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderPeripheral?: OrderPeripheralUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutPeripheralsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderPeripheral?: OrderPeripheralUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type OrderPeripheralUpsertWithWhereUniqueWithoutPeripheralsInput = {
    where: OrderPeripheralWhereUniqueInput
    update: XOR<OrderPeripheralUpdateWithoutPeripheralsInput, OrderPeripheralUncheckedUpdateWithoutPeripheralsInput>
    create: XOR<OrderPeripheralCreateWithoutPeripheralsInput, OrderPeripheralUncheckedCreateWithoutPeripheralsInput>
  }

  export type OrderPeripheralUpdateWithWhereUniqueWithoutPeripheralsInput = {
    where: OrderPeripheralWhereUniqueInput
    data: XOR<OrderPeripheralUpdateWithoutPeripheralsInput, OrderPeripheralUncheckedUpdateWithoutPeripheralsInput>
  }

  export type OrderPeripheralUpdateManyWithWhereWithoutPeripheralsInput = {
    where: OrderPeripheralScalarWhereInput
    data: XOR<OrderPeripheralUpdateManyMutationInput, OrderPeripheralUncheckedUpdateManyWithoutPeripheralsInput>
  }

  export type OrderPeripheralScalarWhereInput = {
    AND?: OrderPeripheralScalarWhereInput | OrderPeripheralScalarWhereInput[]
    OR?: OrderPeripheralScalarWhereInput[]
    NOT?: OrderPeripheralScalarWhereInput | OrderPeripheralScalarWhereInput[]
    id?: IntFilter<"OrderPeripheral"> | number
    orderId?: StringFilter<"OrderPeripheral"> | string
    peripheralId?: IntFilter<"OrderPeripheral"> | number
    storeId?: IntFilter<"OrderPeripheral"> | number
    created_at?: DateTimeFilter<"OrderPeripheral"> | Date | string
    updated_at?: DateTimeFilter<"OrderPeripheral"> | Date | string
  }

  export type PeripheralsCreateWithoutStoreInput = {
    nama_peripheral: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    OrderPeripheral?: OrderPeripheralCreateNestedManyWithoutPeripheralsInput
  }

  export type PeripheralsUncheckedCreateWithoutStoreInput = {
    id?: number
    nama_peripheral: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    OrderPeripheral?: OrderPeripheralUncheckedCreateNestedManyWithoutPeripheralsInput
  }

  export type PeripheralsCreateOrConnectWithoutStoreInput = {
    where: PeripheralsWhereUniqueInput
    create: XOR<PeripheralsCreateWithoutStoreInput, PeripheralsUncheckedCreateWithoutStoreInput>
  }

  export type PeripheralsCreateManyStoreInputEnvelope = {
    data: PeripheralsCreateManyStoreInput | PeripheralsCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type OrderPeripheralCreateWithoutStoreInput = {
    created_at?: Date | string
    updated_at?: Date | string
    orders: OrdersCreateNestedOneWithoutOrderPeripheralInput
    Peripherals: PeripheralsCreateNestedOneWithoutOrderPeripheralInput
  }

  export type OrderPeripheralUncheckedCreateWithoutStoreInput = {
    id?: number
    orderId: string
    peripheralId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderPeripheralCreateOrConnectWithoutStoreInput = {
    where: OrderPeripheralWhereUniqueInput
    create: XOR<OrderPeripheralCreateWithoutStoreInput, OrderPeripheralUncheckedCreateWithoutStoreInput>
  }

  export type OrderPeripheralCreateManyStoreInputEnvelope = {
    data: OrderPeripheralCreateManyStoreInput | OrderPeripheralCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type PeripheralsUpsertWithWhereUniqueWithoutStoreInput = {
    where: PeripheralsWhereUniqueInput
    update: XOR<PeripheralsUpdateWithoutStoreInput, PeripheralsUncheckedUpdateWithoutStoreInput>
    create: XOR<PeripheralsCreateWithoutStoreInput, PeripheralsUncheckedCreateWithoutStoreInput>
  }

  export type PeripheralsUpdateWithWhereUniqueWithoutStoreInput = {
    where: PeripheralsWhereUniqueInput
    data: XOR<PeripheralsUpdateWithoutStoreInput, PeripheralsUncheckedUpdateWithoutStoreInput>
  }

  export type PeripheralsUpdateManyWithWhereWithoutStoreInput = {
    where: PeripheralsScalarWhereInput
    data: XOR<PeripheralsUpdateManyMutationInput, PeripheralsUncheckedUpdateManyWithoutStoreInput>
  }

  export type PeripheralsScalarWhereInput = {
    AND?: PeripheralsScalarWhereInput | PeripheralsScalarWhereInput[]
    OR?: PeripheralsScalarWhereInput[]
    NOT?: PeripheralsScalarWhereInput | PeripheralsScalarWhereInput[]
    id?: IntFilter<"Peripherals"> | number
    nama_peripheral?: StringFilter<"Peripherals"> | string
    slug?: StringFilter<"Peripherals"> | string
    deskripsi?: StringFilter<"Peripherals"> | string
    harga?: FloatFilter<"Peripherals"> | number
    categories?: StringFilter<"Peripherals"> | string
    image?: StringNullableFilter<"Peripherals"> | string | null
    store_id?: IntFilter<"Peripherals"> | number
    created_at?: DateTimeFilter<"Peripherals"> | Date | string
    updated_at?: DateTimeFilter<"Peripherals"> | Date | string
  }

  export type OrderPeripheralUpsertWithWhereUniqueWithoutStoreInput = {
    where: OrderPeripheralWhereUniqueInput
    update: XOR<OrderPeripheralUpdateWithoutStoreInput, OrderPeripheralUncheckedUpdateWithoutStoreInput>
    create: XOR<OrderPeripheralCreateWithoutStoreInput, OrderPeripheralUncheckedCreateWithoutStoreInput>
  }

  export type OrderPeripheralUpdateWithWhereUniqueWithoutStoreInput = {
    where: OrderPeripheralWhereUniqueInput
    data: XOR<OrderPeripheralUpdateWithoutStoreInput, OrderPeripheralUncheckedUpdateWithoutStoreInput>
  }

  export type OrderPeripheralUpdateManyWithWhereWithoutStoreInput = {
    where: OrderPeripheralScalarWhereInput
    data: XOR<OrderPeripheralUpdateManyMutationInput, OrderPeripheralUncheckedUpdateManyWithoutStoreInput>
  }

  export type OrderPeripheralCreateWithoutOrdersInput = {
    created_at?: Date | string
    updated_at?: Date | string
    Peripherals: PeripheralsCreateNestedOneWithoutOrderPeripheralInput
    store: StoreCreateNestedOneWithoutOrderPeripheralInput
  }

  export type OrderPeripheralUncheckedCreateWithoutOrdersInput = {
    id?: number
    peripheralId: number
    storeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderPeripheralCreateOrConnectWithoutOrdersInput = {
    where: OrderPeripheralWhereUniqueInput
    create: XOR<OrderPeripheralCreateWithoutOrdersInput, OrderPeripheralUncheckedCreateWithoutOrdersInput>
  }

  export type OrderPeripheralCreateManyOrdersInputEnvelope = {
    data: OrderPeripheralCreateManyOrdersInput | OrderPeripheralCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type OrderPeripheralUpsertWithWhereUniqueWithoutOrdersInput = {
    where: OrderPeripheralWhereUniqueInput
    update: XOR<OrderPeripheralUpdateWithoutOrdersInput, OrderPeripheralUncheckedUpdateWithoutOrdersInput>
    create: XOR<OrderPeripheralCreateWithoutOrdersInput, OrderPeripheralUncheckedCreateWithoutOrdersInput>
  }

  export type OrderPeripheralUpdateWithWhereUniqueWithoutOrdersInput = {
    where: OrderPeripheralWhereUniqueInput
    data: XOR<OrderPeripheralUpdateWithoutOrdersInput, OrderPeripheralUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderPeripheralUpdateManyWithWhereWithoutOrdersInput = {
    where: OrderPeripheralScalarWhereInput
    data: XOR<OrderPeripheralUpdateManyMutationInput, OrderPeripheralUncheckedUpdateManyWithoutOrdersInput>
  }

  export type OrdersCreateWithoutOrderPeripheralInput = {
    id: string
    user_email: string
    total_harga: number
    token: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrdersUncheckedCreateWithoutOrderPeripheralInput = {
    id: string
    user_email: string
    total_harga: number
    token: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrdersCreateOrConnectWithoutOrderPeripheralInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrderPeripheralInput, OrdersUncheckedCreateWithoutOrderPeripheralInput>
  }

  export type PeripheralsCreateWithoutOrderPeripheralInput = {
    nama_peripheral: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Store?: StoreCreateNestedOneWithoutPeripheralsInput
  }

  export type PeripheralsUncheckedCreateWithoutOrderPeripheralInput = {
    id?: number
    nama_peripheral: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    store_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PeripheralsCreateOrConnectWithoutOrderPeripheralInput = {
    where: PeripheralsWhereUniqueInput
    create: XOR<PeripheralsCreateWithoutOrderPeripheralInput, PeripheralsUncheckedCreateWithoutOrderPeripheralInput>
  }

  export type StoreCreateWithoutOrderPeripheralInput = {
    nama_toko: string
    slug?: string | null
    deskripsi?: string | null
    telp?: string | null
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string
    Peripherals?: PeripheralsCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutOrderPeripheralInput = {
    id?: number
    nama_toko: string
    slug?: string | null
    deskripsi?: string | null
    telp?: string | null
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string
    Peripherals?: PeripheralsUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutOrderPeripheralInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutOrderPeripheralInput, StoreUncheckedCreateWithoutOrderPeripheralInput>
  }

  export type OrdersUpsertWithoutOrderPeripheralInput = {
    update: XOR<OrdersUpdateWithoutOrderPeripheralInput, OrdersUncheckedUpdateWithoutOrderPeripheralInput>
    create: XOR<OrdersCreateWithoutOrderPeripheralInput, OrdersUncheckedCreateWithoutOrderPeripheralInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrderPeripheralInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrderPeripheralInput, OrdersUncheckedUpdateWithoutOrderPeripheralInput>
  }

  export type OrdersUpdateWithoutOrderPeripheralInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    total_harga?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateWithoutOrderPeripheralInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    total_harga?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeripheralsUpsertWithoutOrderPeripheralInput = {
    update: XOR<PeripheralsUpdateWithoutOrderPeripheralInput, PeripheralsUncheckedUpdateWithoutOrderPeripheralInput>
    create: XOR<PeripheralsCreateWithoutOrderPeripheralInput, PeripheralsUncheckedCreateWithoutOrderPeripheralInput>
    where?: PeripheralsWhereInput
  }

  export type PeripheralsUpdateToOneWithWhereWithoutOrderPeripheralInput = {
    where?: PeripheralsWhereInput
    data: XOR<PeripheralsUpdateWithoutOrderPeripheralInput, PeripheralsUncheckedUpdateWithoutOrderPeripheralInput>
  }

  export type PeripheralsUpdateWithoutOrderPeripheralInput = {
    nama_peripheral?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Store?: StoreUpdateOneWithoutPeripheralsNestedInput
  }

  export type PeripheralsUncheckedUpdateWithoutOrderPeripheralInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_peripheral?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUpsertWithoutOrderPeripheralInput = {
    update: XOR<StoreUpdateWithoutOrderPeripheralInput, StoreUncheckedUpdateWithoutOrderPeripheralInput>
    create: XOR<StoreCreateWithoutOrderPeripheralInput, StoreUncheckedCreateWithoutOrderPeripheralInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutOrderPeripheralInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutOrderPeripheralInput, StoreUncheckedUpdateWithoutOrderPeripheralInput>
  }

  export type StoreUpdateWithoutOrderPeripheralInput = {
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Peripherals?: PeripheralsUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutOrderPeripheralInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Peripherals?: PeripheralsUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type OrderPeripheralCreateManyPeripheralsInput = {
    id?: number
    orderId: string
    storeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderPeripheralUpdateWithoutPeripheralsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateOneRequiredWithoutOrderPeripheralNestedInput
    store?: StoreUpdateOneRequiredWithoutOrderPeripheralNestedInput
  }

  export type OrderPeripheralUncheckedUpdateWithoutPeripheralsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderPeripheralUncheckedUpdateManyWithoutPeripheralsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeripheralsCreateManyStoreInput = {
    id?: number
    nama_peripheral: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderPeripheralCreateManyStoreInput = {
    id?: number
    orderId: string
    peripheralId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PeripheralsUpdateWithoutStoreInput = {
    nama_peripheral?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderPeripheral?: OrderPeripheralUpdateManyWithoutPeripheralsNestedInput
  }

  export type PeripheralsUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_peripheral?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderPeripheral?: OrderPeripheralUncheckedUpdateManyWithoutPeripheralsNestedInput
  }

  export type PeripheralsUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_peripheral?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderPeripheralUpdateWithoutStoreInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateOneRequiredWithoutOrderPeripheralNestedInput
    Peripherals?: PeripheralsUpdateOneRequiredWithoutOrderPeripheralNestedInput
  }

  export type OrderPeripheralUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    peripheralId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderPeripheralUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    peripheralId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderPeripheralCreateManyOrdersInput = {
    id?: number
    peripheralId: number
    storeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderPeripheralUpdateWithoutOrdersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Peripherals?: PeripheralsUpdateOneRequiredWithoutOrderPeripheralNestedInput
    store?: StoreUpdateOneRequiredWithoutOrderPeripheralNestedInput
  }

  export type OrderPeripheralUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    peripheralId?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderPeripheralUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    peripheralId?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PeripheralsCountOutputTypeDefaultArgs instead
     */
    export type PeripheralsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PeripheralsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreCountOutputTypeDefaultArgs instead
     */
    export type StoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrdersCountOutputTypeDefaultArgs instead
     */
    export type OrdersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrdersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PeripheralsDefaultArgs instead
     */
    export type PeripheralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PeripheralsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CartDefaultArgs instead
     */
    export type CartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreDefaultArgs instead
     */
    export type StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrdersDefaultArgs instead
     */
    export type OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrdersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderPeripheralDefaultArgs instead
     */
    export type OrderPeripheralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderPeripheralDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}