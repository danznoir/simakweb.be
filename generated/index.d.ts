
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model AssignmentContent
 * 
 */
export type AssignmentContent = $Result.DefaultSelection<Prisma.$AssignmentContentPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model DailyJournal
 * 
 */
export type DailyJournal = $Result.DefaultSelection<Prisma.$DailyJournalPayload>
/**
 * Model Division
 * 
 */
export type Division = $Result.DefaultSelection<Prisma.$DivisionPayload>
/**
 * Model MonthlyEvaluation
 * 
 */
export type MonthlyEvaluation = $Result.DefaultSelection<Prisma.$MonthlyEvaluationPayload>
/**
 * Model SantriProfile
 * 
 */
export type SantriProfile = $Result.DefaultSelection<Prisma.$SantriProfilePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model WaliProfile
 * 
 */
export type WaliProfile = $Result.DefaultSelection<Prisma.$WaliProfilePayload>
/**
 * Model WaliSantriRelation
 * 
 */
export type WaliSantriRelation = $Result.DefaultSelection<Prisma.$WaliSantriRelationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MENTOR: 'MENTOR',
  SANTRI: 'SANTRI',
  WALI_SANTRI: 'WALI_SANTRI'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AttendanceStatus: {
  HADIR: 'HADIR',
  SAKIT: 'SAKIT',
  IZIN: 'IZIN',
  ALFA: 'ALFA'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const SubmissionType: {
  TEXT: 'TEXT',
  FILE: 'FILE'
};

export type SubmissionType = (typeof SubmissionType)[keyof typeof SubmissionType]


export const GradingStatus: {
  PENDING: 'PENDING',
  GRADED: 'GRADED'
};

export type GradingStatus = (typeof GradingStatus)[keyof typeof GradingStatus]


export const ContentType: {
  VIDEO: 'VIDEO',
  FOTO: 'FOTO',
  TEXT: 'TEXT'
};

export type ContentType = (typeof ContentType)[keyof typeof ContentType]


export const WaliSantriCategory: {
  AYAH: 'AYAH',
  IBU: 'IBU',
  OTHER: 'OTHER'
};

export type WaliSantriCategory = (typeof WaliSantriCategory)[keyof typeof WaliSantriCategory]


export const TugasType: {
  HARIAN: 'HARIAN',
  MINGGUAN: 'MINGGUAN',
  BULANAN: 'BULANAN'
};

export type TugasType = (typeof TugasType)[keyof typeof TugasType]


export const Gender: {
  LAKI_LAKI: 'LAKI_LAKI',
  PEREMPUAN: 'PEREMPUAN'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type SubmissionType = $Enums.SubmissionType

export const SubmissionType: typeof $Enums.SubmissionType

export type GradingStatus = $Enums.GradingStatus

export const GradingStatus: typeof $Enums.GradingStatus

export type ContentType = $Enums.ContentType

export const ContentType: typeof $Enums.ContentType

export type WaliSantriCategory = $Enums.WaliSantriCategory

export const WaliSantriCategory: typeof $Enums.WaliSantriCategory

export type TugasType = $Enums.TugasType

export const TugasType: typeof $Enums.TugasType

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Verifications
 * const verifications = await prisma.verification.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Verifications
   * const verifications = await prisma.verification.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignmentContent`: Exposes CRUD operations for the **AssignmentContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssignmentContents
    * const assignmentContents = await prisma.assignmentContent.findMany()
    * ```
    */
  get assignmentContent(): Prisma.AssignmentContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyJournal`: Exposes CRUD operations for the **DailyJournal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyJournals
    * const dailyJournals = await prisma.dailyJournal.findMany()
    * ```
    */
  get dailyJournal(): Prisma.DailyJournalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.division`: Exposes CRUD operations for the **Division** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Divisions
    * const divisions = await prisma.division.findMany()
    * ```
    */
  get division(): Prisma.DivisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthlyEvaluation`: Exposes CRUD operations for the **MonthlyEvaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyEvaluations
    * const monthlyEvaluations = await prisma.monthlyEvaluation.findMany()
    * ```
    */
  get monthlyEvaluation(): Prisma.MonthlyEvaluationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.santriProfile`: Exposes CRUD operations for the **SantriProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SantriProfiles
    * const santriProfiles = await prisma.santriProfile.findMany()
    * ```
    */
  get santriProfile(): Prisma.SantriProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waliProfile`: Exposes CRUD operations for the **WaliProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaliProfiles
    * const waliProfiles = await prisma.waliProfile.findMany()
    * ```
    */
  get waliProfile(): Prisma.WaliProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waliSantriRelation`: Exposes CRUD operations for the **WaliSantriRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaliSantriRelations
    * const waliSantriRelations = await prisma.waliSantriRelation.findMany()
    * ```
    */
  get waliSantriRelation(): Prisma.WaliSantriRelationDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Verification: 'Verification',
    Assignment: 'Assignment',
    AssignmentContent: 'AssignmentContent',
    Attendance: 'Attendance',
    Class: 'Class',
    DailyJournal: 'DailyJournal',
    Division: 'Division',
    MonthlyEvaluation: 'MonthlyEvaluation',
    SantriProfile: 'SantriProfile',
    User: 'User',
    WaliProfile: 'WaliProfile',
    WaliSantriRelation: 'WaliSantriRelation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "verification" | "assignment" | "assignmentContent" | "attendance" | "class" | "dailyJournal" | "division" | "monthlyEvaluation" | "santriProfile" | "user" | "waliProfile" | "waliSantriRelation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      AssignmentContent: {
        payload: Prisma.$AssignmentContentPayload<ExtArgs>
        fields: Prisma.AssignmentContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>
          }
          findMany: {
            args: Prisma.AssignmentContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>[]
          }
          create: {
            args: Prisma.AssignmentContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>
          }
          createMany: {
            args: Prisma.AssignmentContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>
          }
          update: {
            args: Prisma.AssignmentContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignmentContent>
          }
          groupBy: {
            args: Prisma.AssignmentContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentContentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentContentCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      DailyJournal: {
        payload: Prisma.$DailyJournalPayload<ExtArgs>
        fields: Prisma.DailyJournalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyJournalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyJournalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyJournalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyJournalPayload>
          }
          findFirst: {
            args: Prisma.DailyJournalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyJournalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyJournalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyJournalPayload>
          }
          findMany: {
            args: Prisma.DailyJournalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyJournalPayload>[]
          }
          create: {
            args: Prisma.DailyJournalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyJournalPayload>
          }
          createMany: {
            args: Prisma.DailyJournalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyJournalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyJournalPayload>[]
          }
          delete: {
            args: Prisma.DailyJournalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyJournalPayload>
          }
          update: {
            args: Prisma.DailyJournalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyJournalPayload>
          }
          deleteMany: {
            args: Prisma.DailyJournalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyJournalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyJournalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyJournalPayload>[]
          }
          upsert: {
            args: Prisma.DailyJournalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyJournalPayload>
          }
          aggregate: {
            args: Prisma.DailyJournalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyJournal>
          }
          groupBy: {
            args: Prisma.DailyJournalGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyJournalGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyJournalCountArgs<ExtArgs>
            result: $Utils.Optional<DailyJournalCountAggregateOutputType> | number
          }
        }
      }
      Division: {
        payload: Prisma.$DivisionPayload<ExtArgs>
        fields: Prisma.DivisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DivisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DivisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          findFirst: {
            args: Prisma.DivisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DivisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          findMany: {
            args: Prisma.DivisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>[]
          }
          create: {
            args: Prisma.DivisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          createMany: {
            args: Prisma.DivisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DivisionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>[]
          }
          delete: {
            args: Prisma.DivisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          update: {
            args: Prisma.DivisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          deleteMany: {
            args: Prisma.DivisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DivisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DivisionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>[]
          }
          upsert: {
            args: Prisma.DivisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          aggregate: {
            args: Prisma.DivisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDivision>
          }
          groupBy: {
            args: Prisma.DivisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DivisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DivisionCountArgs<ExtArgs>
            result: $Utils.Optional<DivisionCountAggregateOutputType> | number
          }
        }
      }
      MonthlyEvaluation: {
        payload: Prisma.$MonthlyEvaluationPayload<ExtArgs>
        fields: Prisma.MonthlyEvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyEvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyEvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEvaluationPayload>
          }
          findFirst: {
            args: Prisma.MonthlyEvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyEvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEvaluationPayload>
          }
          findMany: {
            args: Prisma.MonthlyEvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEvaluationPayload>[]
          }
          create: {
            args: Prisma.MonthlyEvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEvaluationPayload>
          }
          createMany: {
            args: Prisma.MonthlyEvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthlyEvaluationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEvaluationPayload>[]
          }
          delete: {
            args: Prisma.MonthlyEvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEvaluationPayload>
          }
          update: {
            args: Prisma.MonthlyEvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEvaluationPayload>
          }
          deleteMany: {
            args: Prisma.MonthlyEvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyEvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonthlyEvaluationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEvaluationPayload>[]
          }
          upsert: {
            args: Prisma.MonthlyEvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEvaluationPayload>
          }
          aggregate: {
            args: Prisma.MonthlyEvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyEvaluation>
          }
          groupBy: {
            args: Prisma.MonthlyEvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyEvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyEvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyEvaluationCountAggregateOutputType> | number
          }
        }
      }
      SantriProfile: {
        payload: Prisma.$SantriProfilePayload<ExtArgs>
        fields: Prisma.SantriProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SantriProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SantriProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>
          }
          findFirst: {
            args: Prisma.SantriProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SantriProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>
          }
          findMany: {
            args: Prisma.SantriProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>[]
          }
          create: {
            args: Prisma.SantriProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>
          }
          createMany: {
            args: Prisma.SantriProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SantriProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>[]
          }
          delete: {
            args: Prisma.SantriProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>
          }
          update: {
            args: Prisma.SantriProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>
          }
          deleteMany: {
            args: Prisma.SantriProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SantriProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SantriProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>[]
          }
          upsert: {
            args: Prisma.SantriProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>
          }
          aggregate: {
            args: Prisma.SantriProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSantriProfile>
          }
          groupBy: {
            args: Prisma.SantriProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SantriProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SantriProfileCountArgs<ExtArgs>
            result: $Utils.Optional<SantriProfileCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      WaliProfile: {
        payload: Prisma.$WaliProfilePayload<ExtArgs>
        fields: Prisma.WaliProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaliProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaliProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliProfilePayload>
          }
          findFirst: {
            args: Prisma.WaliProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaliProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliProfilePayload>
          }
          findMany: {
            args: Prisma.WaliProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliProfilePayload>[]
          }
          create: {
            args: Prisma.WaliProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliProfilePayload>
          }
          createMany: {
            args: Prisma.WaliProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaliProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliProfilePayload>[]
          }
          delete: {
            args: Prisma.WaliProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliProfilePayload>
          }
          update: {
            args: Prisma.WaliProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliProfilePayload>
          }
          deleteMany: {
            args: Prisma.WaliProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaliProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaliProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliProfilePayload>[]
          }
          upsert: {
            args: Prisma.WaliProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliProfilePayload>
          }
          aggregate: {
            args: Prisma.WaliProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaliProfile>
          }
          groupBy: {
            args: Prisma.WaliProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaliProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaliProfileCountArgs<ExtArgs>
            result: $Utils.Optional<WaliProfileCountAggregateOutputType> | number
          }
        }
      }
      WaliSantriRelation: {
        payload: Prisma.$WaliSantriRelationPayload<ExtArgs>
        fields: Prisma.WaliSantriRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaliSantriRelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaliSantriRelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>
          }
          findFirst: {
            args: Prisma.WaliSantriRelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaliSantriRelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>
          }
          findMany: {
            args: Prisma.WaliSantriRelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>[]
          }
          create: {
            args: Prisma.WaliSantriRelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>
          }
          createMany: {
            args: Prisma.WaliSantriRelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaliSantriRelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>[]
          }
          delete: {
            args: Prisma.WaliSantriRelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>
          }
          update: {
            args: Prisma.WaliSantriRelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>
          }
          deleteMany: {
            args: Prisma.WaliSantriRelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaliSantriRelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaliSantriRelationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>[]
          }
          upsert: {
            args: Prisma.WaliSantriRelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>
          }
          aggregate: {
            args: Prisma.WaliSantriRelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaliSantriRelation>
          }
          groupBy: {
            args: Prisma.WaliSantriRelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaliSantriRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaliSantriRelationCountArgs<ExtArgs>
            result: $Utils.Optional<WaliSantriRelationCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    verification?: VerificationOmit
    assignment?: AssignmentOmit
    assignmentContent?: AssignmentContentOmit
    attendance?: AttendanceOmit
    class?: ClassOmit
    dailyJournal?: DailyJournalOmit
    division?: DivisionOmit
    monthlyEvaluation?: MonthlyEvaluationOmit
    santriProfile?: SantriProfileOmit
    user?: UserOmit
    waliProfile?: WaliProfileOmit
    waliSantriRelation?: WaliSantriRelationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type AssignmentCountOutputType
   */

  export type AssignmentCountOutputType = {
    submissions: number
  }

  export type AssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | AssignmentCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentCountOutputType
     */
    select?: AssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentContentWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    attendances: number
    assignments: number
    santriProfiles: number
    dailyJournals: number
    monthlyEvaluations: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | ClassCountOutputTypeCountAttendancesArgs
    assignments?: boolean | ClassCountOutputTypeCountAssignmentsArgs
    santriProfiles?: boolean | ClassCountOutputTypeCountSantriProfilesArgs
    dailyJournals?: boolean | ClassCountOutputTypeCountDailyJournalsArgs
    monthlyEvaluations?: boolean | ClassCountOutputTypeCountMonthlyEvaluationsArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountSantriProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SantriProfileWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountDailyJournalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyJournalWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountMonthlyEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyEvaluationWhereInput
  }


  /**
   * Count Type DivisionCountOutputType
   */

  export type DivisionCountOutputType = {
    classes: number
  }

  export type DivisionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | DivisionCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes
  /**
   * DivisionCountOutputType without action
   */
  export type DivisionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionCountOutputType
     */
    select?: DivisionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DivisionCountOutputType without action
   */
  export type DivisionCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    verifications: number
    mentorClasses: number
    mentorAttendances: number
    santriAttendances: number
    mentorAssignments: number
    santriSubmissions: number
    waliRelations: number
    santriRelations: number
    dailyJournals: number
    mentorDailyJournals: number
    monthlyEvaluations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verifications?: boolean | UserCountOutputTypeCountVerificationsArgs
    mentorClasses?: boolean | UserCountOutputTypeCountMentorClassesArgs
    mentorAttendances?: boolean | UserCountOutputTypeCountMentorAttendancesArgs
    santriAttendances?: boolean | UserCountOutputTypeCountSantriAttendancesArgs
    mentorAssignments?: boolean | UserCountOutputTypeCountMentorAssignmentsArgs
    santriSubmissions?: boolean | UserCountOutputTypeCountSantriSubmissionsArgs
    waliRelations?: boolean | UserCountOutputTypeCountWaliRelationsArgs
    santriRelations?: boolean | UserCountOutputTypeCountSantriRelationsArgs
    dailyJournals?: boolean | UserCountOutputTypeCountDailyJournalsArgs
    mentorDailyJournals?: boolean | UserCountOutputTypeCountMentorDailyJournalsArgs
    monthlyEvaluations?: boolean | UserCountOutputTypeCountMonthlyEvaluationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMentorClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMentorAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSantriAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMentorAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSantriSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentContentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWaliRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaliSantriRelationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSantriRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaliSantriRelationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyJournalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyJournalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMentorDailyJournalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyJournalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMonthlyEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyEvaluationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    otpCode: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    otpCode: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    user_id: number
    otpCode: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    user_id?: true
    otpCode?: true
    expiresAt?: true
    createdAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    user_id?: true
    otpCode?: true
    expiresAt?: true
    createdAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    user_id?: true
    otpCode?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    user_id: string
    otpCode: string
    expiresAt: Date
    createdAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    otpCode?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    otpCode?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    otpCode?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    user_id?: boolean
    otpCode?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "otpCode" | "expiresAt" | "createdAt", ExtArgs["result"]["verification"]>
  export type VerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      otpCode: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly user_id: FieldRef<"Verification", 'String'>
    readonly otpCode: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: string | null
    classId: string | null
    mentorId: string | null
    title: string | null
    description: string | null
    submissionType: $Enums.SubmissionType | null
    attachmentUrl: string | null
    due_date: Date | null
    createdAt: Date | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: string | null
    classId: string | null
    mentorId: string | null
    title: string | null
    description: string | null
    submissionType: $Enums.SubmissionType | null
    attachmentUrl: string | null
    due_date: Date | null
    createdAt: Date | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    classId: number
    mentorId: number
    title: number
    description: number
    submissionType: number
    attachmentUrl: number
    due_date: number
    createdAt: number
    _all: number
  }


  export type AssignmentMinAggregateInputType = {
    id?: true
    classId?: true
    mentorId?: true
    title?: true
    description?: true
    submissionType?: true
    attachmentUrl?: true
    due_date?: true
    createdAt?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    classId?: true
    mentorId?: true
    title?: true
    description?: true
    submissionType?: true
    attachmentUrl?: true
    due_date?: true
    createdAt?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    classId?: true
    mentorId?: true
    title?: true
    description?: true
    submissionType?: true
    attachmentUrl?: true
    due_date?: true
    createdAt?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: string
    classId: string
    mentorId: string
    title: string
    description: string | null
    submissionType: $Enums.SubmissionType
    attachmentUrl: string | null
    due_date: Date
    createdAt: Date
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    mentorId?: boolean
    title?: boolean
    description?: boolean
    submissionType?: boolean
    attachmentUrl?: boolean
    due_date?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    mentorId?: boolean
    title?: boolean
    description?: boolean
    submissionType?: boolean
    attachmentUrl?: boolean
    due_date?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    mentorId?: boolean
    title?: boolean
    description?: boolean
    submissionType?: boolean
    attachmentUrl?: boolean
    due_date?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    classId?: boolean
    mentorId?: boolean
    title?: boolean
    description?: boolean
    submissionType?: boolean
    attachmentUrl?: boolean
    due_date?: boolean
    createdAt?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classId" | "mentorId" | "title" | "description" | "submissionType" | "attachmentUrl" | "due_date" | "createdAt", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      mentor: Prisma.$UserPayload<ExtArgs>
      submissions: Prisma.$AssignmentContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      classId: string
      mentorId: string
      title: string
      description: string | null
      submissionType: $Enums.SubmissionType
      attachmentUrl: string | null
      due_date: Date
      createdAt: Date
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {AssignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
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
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends Assignment$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'String'>
    readonly classId: FieldRef<"Assignment", 'String'>
    readonly mentorId: FieldRef<"Assignment", 'String'>
    readonly title: FieldRef<"Assignment", 'String'>
    readonly description: FieldRef<"Assignment", 'String'>
    readonly submissionType: FieldRef<"Assignment", 'SubmissionType'>
    readonly attachmentUrl: FieldRef<"Assignment", 'String'>
    readonly due_date: FieldRef<"Assignment", 'DateTime'>
    readonly createdAt: FieldRef<"Assignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment updateManyAndReturn
   */
  export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment.submissions
   */
  export type Assignment$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    where?: AssignmentContentWhereInput
    orderBy?: AssignmentContentOrderByWithRelationInput | AssignmentContentOrderByWithRelationInput[]
    cursor?: AssignmentContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentContentScalarFieldEnum | AssignmentContentScalarFieldEnum[]
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model AssignmentContent
   */

  export type AggregateAssignmentContent = {
    _count: AssignmentContentCountAggregateOutputType | null
    _avg: AssignmentContentAvgAggregateOutputType | null
    _sum: AssignmentContentSumAggregateOutputType | null
    _min: AssignmentContentMinAggregateOutputType | null
    _max: AssignmentContentMaxAggregateOutputType | null
  }

  export type AssignmentContentAvgAggregateOutputType = {
    score: number | null
  }

  export type AssignmentContentSumAggregateOutputType = {
    score: number | null
  }

  export type AssignmentContentMinAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    santriId: string | null
    contentType: $Enums.ContentType | null
    score: number | null
    mentorFeedback: string | null
    status: $Enums.GradingStatus | null
    submittedAt: Date | null
  }

  export type AssignmentContentMaxAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    santriId: string | null
    contentType: $Enums.ContentType | null
    score: number | null
    mentorFeedback: string | null
    status: $Enums.GradingStatus | null
    submittedAt: Date | null
  }

  export type AssignmentContentCountAggregateOutputType = {
    id: number
    assignmentId: number
    santriId: number
    contentType: number
    fileUrl: number
    score: number
    mentorFeedback: number
    status: number
    submittedAt: number
    _all: number
  }


  export type AssignmentContentAvgAggregateInputType = {
    score?: true
  }

  export type AssignmentContentSumAggregateInputType = {
    score?: true
  }

  export type AssignmentContentMinAggregateInputType = {
    id?: true
    assignmentId?: true
    santriId?: true
    contentType?: true
    score?: true
    mentorFeedback?: true
    status?: true
    submittedAt?: true
  }

  export type AssignmentContentMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    santriId?: true
    contentType?: true
    score?: true
    mentorFeedback?: true
    status?: true
    submittedAt?: true
  }

  export type AssignmentContentCountAggregateInputType = {
    id?: true
    assignmentId?: true
    santriId?: true
    contentType?: true
    fileUrl?: true
    score?: true
    mentorFeedback?: true
    status?: true
    submittedAt?: true
    _all?: true
  }

  export type AssignmentContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentContent to aggregate.
     */
    where?: AssignmentContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentContents to fetch.
     */
    orderBy?: AssignmentContentOrderByWithRelationInput | AssignmentContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssignmentContents
    **/
    _count?: true | AssignmentContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentContentMaxAggregateInputType
  }

  export type GetAssignmentContentAggregateType<T extends AssignmentContentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignmentContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignmentContent[P]>
      : GetScalarType<T[P], AggregateAssignmentContent[P]>
  }




  export type AssignmentContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentContentWhereInput
    orderBy?: AssignmentContentOrderByWithAggregationInput | AssignmentContentOrderByWithAggregationInput[]
    by: AssignmentContentScalarFieldEnum[] | AssignmentContentScalarFieldEnum
    having?: AssignmentContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentContentCountAggregateInputType | true
    _avg?: AssignmentContentAvgAggregateInputType
    _sum?: AssignmentContentSumAggregateInputType
    _min?: AssignmentContentMinAggregateInputType
    _max?: AssignmentContentMaxAggregateInputType
  }

  export type AssignmentContentGroupByOutputType = {
    id: string
    assignmentId: string
    santriId: string
    contentType: $Enums.ContentType
    fileUrl: string[]
    score: number | null
    mentorFeedback: string | null
    status: $Enums.GradingStatus
    submittedAt: Date
    _count: AssignmentContentCountAggregateOutputType | null
    _avg: AssignmentContentAvgAggregateOutputType | null
    _sum: AssignmentContentSumAggregateOutputType | null
    _min: AssignmentContentMinAggregateOutputType | null
    _max: AssignmentContentMaxAggregateOutputType | null
  }

  type GetAssignmentContentGroupByPayload<T extends AssignmentContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentContentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentContentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    santriId?: boolean
    contentType?: boolean
    fileUrl?: boolean
    score?: boolean
    mentorFeedback?: boolean
    status?: boolean
    submittedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentContent"]>

  export type AssignmentContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    santriId?: boolean
    contentType?: boolean
    fileUrl?: boolean
    score?: boolean
    mentorFeedback?: boolean
    status?: boolean
    submittedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentContent"]>

  export type AssignmentContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    santriId?: boolean
    contentType?: boolean
    fileUrl?: boolean
    score?: boolean
    mentorFeedback?: boolean
    status?: boolean
    submittedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentContent"]>

  export type AssignmentContentSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    santriId?: boolean
    contentType?: boolean
    fileUrl?: boolean
    score?: boolean
    mentorFeedback?: boolean
    status?: boolean
    submittedAt?: boolean
  }

  export type AssignmentContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "santriId" | "contentType" | "fileUrl" | "score" | "mentorFeedback" | "status" | "submittedAt", ExtArgs["result"]["assignmentContent"]>
  export type AssignmentContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssignmentContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssignmentContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssignmentContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssignmentContent"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
      santri: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assignmentId: string
      santriId: string
      contentType: $Enums.ContentType
      fileUrl: string[]
      score: number | null
      mentorFeedback: string | null
      status: $Enums.GradingStatus
      submittedAt: Date
    }, ExtArgs["result"]["assignmentContent"]>
    composites: {}
  }

  type AssignmentContentGetPayload<S extends boolean | null | undefined | AssignmentContentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentContentPayload, S>

  type AssignmentContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentContentCountAggregateInputType | true
    }

  export interface AssignmentContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssignmentContent'], meta: { name: 'AssignmentContent' } }
    /**
     * Find zero or one AssignmentContent that matches the filter.
     * @param {AssignmentContentFindUniqueArgs} args - Arguments to find a AssignmentContent
     * @example
     * // Get one AssignmentContent
     * const assignmentContent = await prisma.assignmentContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentContentFindUniqueArgs>(args: SelectSubset<T, AssignmentContentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssignmentContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentContentFindUniqueOrThrowArgs} args - Arguments to find a AssignmentContent
     * @example
     * // Get one AssignmentContent
     * const assignmentContent = await prisma.assignmentContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentContentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentContentFindFirstArgs} args - Arguments to find a AssignmentContent
     * @example
     * // Get one AssignmentContent
     * const assignmentContent = await prisma.assignmentContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentContentFindFirstArgs>(args?: SelectSubset<T, AssignmentContentFindFirstArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentContentFindFirstOrThrowArgs} args - Arguments to find a AssignmentContent
     * @example
     * // Get one AssignmentContent
     * const assignmentContent = await prisma.assignmentContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentContentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssignmentContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssignmentContents
     * const assignmentContents = await prisma.assignmentContent.findMany()
     * 
     * // Get first 10 AssignmentContents
     * const assignmentContents = await prisma.assignmentContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentContentWithIdOnly = await prisma.assignmentContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentContentFindManyArgs>(args?: SelectSubset<T, AssignmentContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssignmentContent.
     * @param {AssignmentContentCreateArgs} args - Arguments to create a AssignmentContent.
     * @example
     * // Create one AssignmentContent
     * const AssignmentContent = await prisma.assignmentContent.create({
     *   data: {
     *     // ... data to create a AssignmentContent
     *   }
     * })
     * 
     */
    create<T extends AssignmentContentCreateArgs>(args: SelectSubset<T, AssignmentContentCreateArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssignmentContents.
     * @param {AssignmentContentCreateManyArgs} args - Arguments to create many AssignmentContents.
     * @example
     * // Create many AssignmentContents
     * const assignmentContent = await prisma.assignmentContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentContentCreateManyArgs>(args?: SelectSubset<T, AssignmentContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssignmentContents and returns the data saved in the database.
     * @param {AssignmentContentCreateManyAndReturnArgs} args - Arguments to create many AssignmentContents.
     * @example
     * // Create many AssignmentContents
     * const assignmentContent = await prisma.assignmentContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssignmentContents and only return the `id`
     * const assignmentContentWithIdOnly = await prisma.assignmentContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentContentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssignmentContent.
     * @param {AssignmentContentDeleteArgs} args - Arguments to delete one AssignmentContent.
     * @example
     * // Delete one AssignmentContent
     * const AssignmentContent = await prisma.assignmentContent.delete({
     *   where: {
     *     // ... filter to delete one AssignmentContent
     *   }
     * })
     * 
     */
    delete<T extends AssignmentContentDeleteArgs>(args: SelectSubset<T, AssignmentContentDeleteArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssignmentContent.
     * @param {AssignmentContentUpdateArgs} args - Arguments to update one AssignmentContent.
     * @example
     * // Update one AssignmentContent
     * const assignmentContent = await prisma.assignmentContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentContentUpdateArgs>(args: SelectSubset<T, AssignmentContentUpdateArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssignmentContents.
     * @param {AssignmentContentDeleteManyArgs} args - Arguments to filter AssignmentContents to delete.
     * @example
     * // Delete a few AssignmentContents
     * const { count } = await prisma.assignmentContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentContentDeleteManyArgs>(args?: SelectSubset<T, AssignmentContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssignmentContents
     * const assignmentContent = await prisma.assignmentContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentContentUpdateManyArgs>(args: SelectSubset<T, AssignmentContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentContents and returns the data updated in the database.
     * @param {AssignmentContentUpdateManyAndReturnArgs} args - Arguments to update many AssignmentContents.
     * @example
     * // Update many AssignmentContents
     * const assignmentContent = await prisma.assignmentContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssignmentContents and only return the `id`
     * const assignmentContentWithIdOnly = await prisma.assignmentContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentContentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssignmentContent.
     * @param {AssignmentContentUpsertArgs} args - Arguments to update or create a AssignmentContent.
     * @example
     * // Update or create a AssignmentContent
     * const assignmentContent = await prisma.assignmentContent.upsert({
     *   create: {
     *     // ... data to create a AssignmentContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssignmentContent we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentContentUpsertArgs>(args: SelectSubset<T, AssignmentContentUpsertArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssignmentContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentContentCountArgs} args - Arguments to filter AssignmentContents to count.
     * @example
     * // Count the number of AssignmentContents
     * const count = await prisma.assignmentContent.count({
     *   where: {
     *     // ... the filter for the AssignmentContents we want to count
     *   }
     * })
    **/
    count<T extends AssignmentContentCountArgs>(
      args?: Subset<T, AssignmentContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssignmentContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentContentAggregateArgs>(args: Subset<T, AssignmentContentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentContentAggregateType<T>>

    /**
     * Group by AssignmentContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentContentGroupByArgs} args - Group by arguments.
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
      T extends AssignmentContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentContentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssignmentContent model
   */
  readonly fields: AssignmentContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssignmentContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    santri<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AssignmentContent model
   */
  interface AssignmentContentFieldRefs {
    readonly id: FieldRef<"AssignmentContent", 'String'>
    readonly assignmentId: FieldRef<"AssignmentContent", 'String'>
    readonly santriId: FieldRef<"AssignmentContent", 'String'>
    readonly contentType: FieldRef<"AssignmentContent", 'ContentType'>
    readonly fileUrl: FieldRef<"AssignmentContent", 'String[]'>
    readonly score: FieldRef<"AssignmentContent", 'Int'>
    readonly mentorFeedback: FieldRef<"AssignmentContent", 'String'>
    readonly status: FieldRef<"AssignmentContent", 'GradingStatus'>
    readonly submittedAt: FieldRef<"AssignmentContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssignmentContent findUnique
   */
  export type AssignmentContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentContent to fetch.
     */
    where: AssignmentContentWhereUniqueInput
  }

  /**
   * AssignmentContent findUniqueOrThrow
   */
  export type AssignmentContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentContent to fetch.
     */
    where: AssignmentContentWhereUniqueInput
  }

  /**
   * AssignmentContent findFirst
   */
  export type AssignmentContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentContent to fetch.
     */
    where?: AssignmentContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentContents to fetch.
     */
    orderBy?: AssignmentContentOrderByWithRelationInput | AssignmentContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentContents.
     */
    cursor?: AssignmentContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentContents.
     */
    distinct?: AssignmentContentScalarFieldEnum | AssignmentContentScalarFieldEnum[]
  }

  /**
   * AssignmentContent findFirstOrThrow
   */
  export type AssignmentContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentContent to fetch.
     */
    where?: AssignmentContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentContents to fetch.
     */
    orderBy?: AssignmentContentOrderByWithRelationInput | AssignmentContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentContents.
     */
    cursor?: AssignmentContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentContents.
     */
    distinct?: AssignmentContentScalarFieldEnum | AssignmentContentScalarFieldEnum[]
  }

  /**
   * AssignmentContent findMany
   */
  export type AssignmentContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentContents to fetch.
     */
    where?: AssignmentContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentContents to fetch.
     */
    orderBy?: AssignmentContentOrderByWithRelationInput | AssignmentContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssignmentContents.
     */
    cursor?: AssignmentContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentContents.
     */
    distinct?: AssignmentContentScalarFieldEnum | AssignmentContentScalarFieldEnum[]
  }

  /**
   * AssignmentContent create
   */
  export type AssignmentContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * The data needed to create a AssignmentContent.
     */
    data: XOR<AssignmentContentCreateInput, AssignmentContentUncheckedCreateInput>
  }

  /**
   * AssignmentContent createMany
   */
  export type AssignmentContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssignmentContents.
     */
    data: AssignmentContentCreateManyInput | AssignmentContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssignmentContent createManyAndReturn
   */
  export type AssignmentContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * The data used to create many AssignmentContents.
     */
    data: AssignmentContentCreateManyInput | AssignmentContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssignmentContent update
   */
  export type AssignmentContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * The data needed to update a AssignmentContent.
     */
    data: XOR<AssignmentContentUpdateInput, AssignmentContentUncheckedUpdateInput>
    /**
     * Choose, which AssignmentContent to update.
     */
    where: AssignmentContentWhereUniqueInput
  }

  /**
   * AssignmentContent updateMany
   */
  export type AssignmentContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssignmentContents.
     */
    data: XOR<AssignmentContentUpdateManyMutationInput, AssignmentContentUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentContents to update
     */
    where?: AssignmentContentWhereInput
    /**
     * Limit how many AssignmentContents to update.
     */
    limit?: number
  }

  /**
   * AssignmentContent updateManyAndReturn
   */
  export type AssignmentContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * The data used to update AssignmentContents.
     */
    data: XOR<AssignmentContentUpdateManyMutationInput, AssignmentContentUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentContents to update
     */
    where?: AssignmentContentWhereInput
    /**
     * Limit how many AssignmentContents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssignmentContent upsert
   */
  export type AssignmentContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * The filter to search for the AssignmentContent to update in case it exists.
     */
    where: AssignmentContentWhereUniqueInput
    /**
     * In case the AssignmentContent found by the `where` argument doesn't exist, create a new AssignmentContent with this data.
     */
    create: XOR<AssignmentContentCreateInput, AssignmentContentUncheckedCreateInput>
    /**
     * In case the AssignmentContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentContentUpdateInput, AssignmentContentUncheckedUpdateInput>
  }

  /**
   * AssignmentContent delete
   */
  export type AssignmentContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * Filter which AssignmentContent to delete.
     */
    where: AssignmentContentWhereUniqueInput
  }

  /**
   * AssignmentContent deleteMany
   */
  export type AssignmentContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentContents to delete
     */
    where?: AssignmentContentWhereInput
    /**
     * Limit how many AssignmentContents to delete.
     */
    limit?: number
  }

  /**
   * AssignmentContent without action
   */
  export type AssignmentContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    classId: string | null
    santriId: string | null
    mentorId: string | null
    date: Date | null
    status: $Enums.AttendanceStatus | null
    notes: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    classId: string | null
    santriId: string | null
    mentorId: string | null
    date: Date | null
    status: $Enums.AttendanceStatus | null
    notes: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    classId: number
    santriId: number
    mentorId: number
    date: number
    status: number
    notes: number
    imageUrl: number
    createdAt: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    classId?: true
    santriId?: true
    mentorId?: true
    date?: true
    status?: true
    notes?: true
    imageUrl?: true
    createdAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    classId?: true
    santriId?: true
    mentorId?: true
    date?: true
    status?: true
    notes?: true
    imageUrl?: true
    createdAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    classId?: true
    santriId?: true
    mentorId?: true
    date?: true
    status?: true
    notes?: true
    imageUrl?: true
    createdAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    classId: string
    santriId: string
    mentorId: string
    date: Date
    status: $Enums.AttendanceStatus
    notes: string | null
    imageUrl: string | null
    createdAt: Date
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    santriId?: boolean
    mentorId?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    santriId?: boolean
    mentorId?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    santriId?: boolean
    mentorId?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    classId?: boolean
    santriId?: boolean
    mentorId?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classId" | "santriId" | "mentorId" | "date" | "status" | "notes" | "imageUrl" | "createdAt", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      santri: Prisma.$UserPayload<ExtArgs>
      mentor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      classId: string
      santriId: string
      mentorId: string
      date: Date
      status: $Enums.AttendanceStatus
      notes: string | null
      imageUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    santri<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly classId: FieldRef<"Attendance", 'String'>
    readonly santriId: FieldRef<"Attendance", 'String'>
    readonly mentorId: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'AttendanceStatus'>
    readonly notes: FieldRef<"Attendance", 'String'>
    readonly imageUrl: FieldRef<"Attendance", 'String'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    divisiId: string | null
    name: string | null
    mentorId: string | null
    createdAt: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    divisiId: string | null
    name: string | null
    mentorId: string | null
    createdAt: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    divisiId: number
    name: number
    mentorId: number
    createdAt: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    divisiId?: true
    name?: true
    mentorId?: true
    createdAt?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    divisiId?: true
    name?: true
    mentorId?: true
    createdAt?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    divisiId?: true
    name?: true
    mentorId?: true
    createdAt?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    divisiId: string
    name: string
    mentorId: string
    createdAt: Date
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    divisiId?: boolean
    name?: boolean
    mentorId?: boolean
    createdAt?: boolean
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
    attendances?: boolean | Class$attendancesArgs<ExtArgs>
    assignments?: boolean | Class$assignmentsArgs<ExtArgs>
    santriProfiles?: boolean | Class$santriProfilesArgs<ExtArgs>
    dailyJournals?: boolean | Class$dailyJournalsArgs<ExtArgs>
    monthlyEvaluations?: boolean | Class$monthlyEvaluationsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    divisiId?: boolean
    name?: boolean
    mentorId?: boolean
    createdAt?: boolean
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    divisiId?: boolean
    name?: boolean
    mentorId?: boolean
    createdAt?: boolean
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    divisiId?: boolean
    name?: boolean
    mentorId?: boolean
    createdAt?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "divisiId" | "name" | "mentorId" | "createdAt", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
    attendances?: boolean | Class$attendancesArgs<ExtArgs>
    assignments?: boolean | Class$assignmentsArgs<ExtArgs>
    santriProfiles?: boolean | Class$santriProfilesArgs<ExtArgs>
    dailyJournals?: boolean | Class$dailyJournalsArgs<ExtArgs>
    monthlyEvaluations?: boolean | Class$monthlyEvaluationsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      division: Prisma.$DivisionPayload<ExtArgs>
      mentor: Prisma.$UserPayload<ExtArgs>
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      santriProfiles: Prisma.$SantriProfilePayload<ExtArgs>[]
      dailyJournals: Prisma.$DailyJournalPayload<ExtArgs>[]
      monthlyEvaluations: Prisma.$MonthlyEvaluationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      divisiId: string
      name: string
      mentorId: string
      createdAt: Date
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
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
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    division<T extends DivisionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DivisionDefaultArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendances<T extends Class$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Class$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends Class$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Class$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    santriProfiles<T extends Class$santriProfilesArgs<ExtArgs> = {}>(args?: Subset<T, Class$santriProfilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyJournals<T extends Class$dailyJournalsArgs<ExtArgs> = {}>(args?: Subset<T, Class$dailyJournalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyJournalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthlyEvaluations<T extends Class$monthlyEvaluationsArgs<ExtArgs> = {}>(args?: Subset<T, Class$monthlyEvaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly divisiId: FieldRef<"Class", 'String'>
    readonly name: FieldRef<"Class", 'String'>
    readonly mentorId: FieldRef<"Class", 'String'>
    readonly createdAt: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.attendances
   */
  export type Class$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Class.assignments
   */
  export type Class$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Class.santriProfiles
   */
  export type Class$santriProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    where?: SantriProfileWhereInput
    orderBy?: SantriProfileOrderByWithRelationInput | SantriProfileOrderByWithRelationInput[]
    cursor?: SantriProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SantriProfileScalarFieldEnum | SantriProfileScalarFieldEnum[]
  }

  /**
   * Class.dailyJournals
   */
  export type Class$dailyJournalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyJournal
     */
    select?: DailyJournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyJournal
     */
    omit?: DailyJournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyJournalInclude<ExtArgs> | null
    where?: DailyJournalWhereInput
    orderBy?: DailyJournalOrderByWithRelationInput | DailyJournalOrderByWithRelationInput[]
    cursor?: DailyJournalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyJournalScalarFieldEnum | DailyJournalScalarFieldEnum[]
  }

  /**
   * Class.monthlyEvaluations
   */
  export type Class$monthlyEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEvaluation
     */
    select?: MonthlyEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEvaluation
     */
    omit?: MonthlyEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyEvaluationInclude<ExtArgs> | null
    where?: MonthlyEvaluationWhereInput
    orderBy?: MonthlyEvaluationOrderByWithRelationInput | MonthlyEvaluationOrderByWithRelationInput[]
    cursor?: MonthlyEvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyEvaluationScalarFieldEnum | MonthlyEvaluationScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model DailyJournal
   */

  export type AggregateDailyJournal = {
    _count: DailyJournalCountAggregateOutputType | null
    _avg: DailyJournalAvgAggregateOutputType | null
    _sum: DailyJournalSumAggregateOutputType | null
    _min: DailyJournalMinAggregateOutputType | null
    _max: DailyJournalMaxAggregateOutputType | null
  }

  export type DailyJournalAvgAggregateOutputType = {
    attitudeScore: number | null
  }

  export type DailyJournalSumAggregateOutputType = {
    attitudeScore: number | null
  }

  export type DailyJournalMinAggregateOutputType = {
    id: string | null
    santriId: string | null
    classId: string | null
    mentorId: string | null
    attitudeScore: number | null
    notes: string | null
    date: Date | null
    description: string | null
    tugasType: $Enums.TugasType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyJournalMaxAggregateOutputType = {
    id: string | null
    santriId: string | null
    classId: string | null
    mentorId: string | null
    attitudeScore: number | null
    notes: string | null
    date: Date | null
    description: string | null
    tugasType: $Enums.TugasType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyJournalCountAggregateOutputType = {
    id: number
    santriId: number
    classId: number
    mentorId: number
    attitudeScore: number
    notes: number
    date: number
    description: number
    tugasType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyJournalAvgAggregateInputType = {
    attitudeScore?: true
  }

  export type DailyJournalSumAggregateInputType = {
    attitudeScore?: true
  }

  export type DailyJournalMinAggregateInputType = {
    id?: true
    santriId?: true
    classId?: true
    mentorId?: true
    attitudeScore?: true
    notes?: true
    date?: true
    description?: true
    tugasType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyJournalMaxAggregateInputType = {
    id?: true
    santriId?: true
    classId?: true
    mentorId?: true
    attitudeScore?: true
    notes?: true
    date?: true
    description?: true
    tugasType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyJournalCountAggregateInputType = {
    id?: true
    santriId?: true
    classId?: true
    mentorId?: true
    attitudeScore?: true
    notes?: true
    date?: true
    description?: true
    tugasType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyJournalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyJournal to aggregate.
     */
    where?: DailyJournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyJournals to fetch.
     */
    orderBy?: DailyJournalOrderByWithRelationInput | DailyJournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyJournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyJournals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyJournals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyJournals
    **/
    _count?: true | DailyJournalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyJournalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyJournalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyJournalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyJournalMaxAggregateInputType
  }

  export type GetDailyJournalAggregateType<T extends DailyJournalAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyJournal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyJournal[P]>
      : GetScalarType<T[P], AggregateDailyJournal[P]>
  }




  export type DailyJournalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyJournalWhereInput
    orderBy?: DailyJournalOrderByWithAggregationInput | DailyJournalOrderByWithAggregationInput[]
    by: DailyJournalScalarFieldEnum[] | DailyJournalScalarFieldEnum
    having?: DailyJournalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyJournalCountAggregateInputType | true
    _avg?: DailyJournalAvgAggregateInputType
    _sum?: DailyJournalSumAggregateInputType
    _min?: DailyJournalMinAggregateInputType
    _max?: DailyJournalMaxAggregateInputType
  }

  export type DailyJournalGroupByOutputType = {
    id: string
    santriId: string
    classId: string
    mentorId: string
    attitudeScore: number
    notes: string
    date: Date
    description: string
    tugasType: $Enums.TugasType
    createdAt: Date
    updatedAt: Date
    _count: DailyJournalCountAggregateOutputType | null
    _avg: DailyJournalAvgAggregateOutputType | null
    _sum: DailyJournalSumAggregateOutputType | null
    _min: DailyJournalMinAggregateOutputType | null
    _max: DailyJournalMaxAggregateOutputType | null
  }

  type GetDailyJournalGroupByPayload<T extends DailyJournalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyJournalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyJournalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyJournalGroupByOutputType[P]>
            : GetScalarType<T[P], DailyJournalGroupByOutputType[P]>
        }
      >
    >


  export type DailyJournalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    santriId?: boolean
    classId?: boolean
    mentorId?: boolean
    attitudeScore?: boolean
    notes?: boolean
    date?: boolean
    description?: boolean
    tugasType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyJournal"]>

  export type DailyJournalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    santriId?: boolean
    classId?: boolean
    mentorId?: boolean
    attitudeScore?: boolean
    notes?: boolean
    date?: boolean
    description?: boolean
    tugasType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyJournal"]>

  export type DailyJournalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    santriId?: boolean
    classId?: boolean
    mentorId?: boolean
    attitudeScore?: boolean
    notes?: boolean
    date?: boolean
    description?: boolean
    tugasType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyJournal"]>

  export type DailyJournalSelectScalar = {
    id?: boolean
    santriId?: boolean
    classId?: boolean
    mentorId?: boolean
    attitudeScore?: boolean
    notes?: boolean
    date?: boolean
    description?: boolean
    tugasType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DailyJournalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "santriId" | "classId" | "mentorId" | "attitudeScore" | "notes" | "date" | "description" | "tugasType" | "createdAt" | "updatedAt", ExtArgs["result"]["dailyJournal"]>
  export type DailyJournalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyJournalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyJournalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyJournalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyJournal"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      santri: Prisma.$UserPayload<ExtArgs>
      mentor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      santriId: string
      classId: string
      mentorId: string
      attitudeScore: number
      notes: string
      date: Date
      description: string
      tugasType: $Enums.TugasType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyJournal"]>
    composites: {}
  }

  type DailyJournalGetPayload<S extends boolean | null | undefined | DailyJournalDefaultArgs> = $Result.GetResult<Prisma.$DailyJournalPayload, S>

  type DailyJournalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyJournalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyJournalCountAggregateInputType | true
    }

  export interface DailyJournalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyJournal'], meta: { name: 'DailyJournal' } }
    /**
     * Find zero or one DailyJournal that matches the filter.
     * @param {DailyJournalFindUniqueArgs} args - Arguments to find a DailyJournal
     * @example
     * // Get one DailyJournal
     * const dailyJournal = await prisma.dailyJournal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyJournalFindUniqueArgs>(args: SelectSubset<T, DailyJournalFindUniqueArgs<ExtArgs>>): Prisma__DailyJournalClient<$Result.GetResult<Prisma.$DailyJournalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyJournal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyJournalFindUniqueOrThrowArgs} args - Arguments to find a DailyJournal
     * @example
     * // Get one DailyJournal
     * const dailyJournal = await prisma.dailyJournal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyJournalFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyJournalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyJournalClient<$Result.GetResult<Prisma.$DailyJournalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyJournal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyJournalFindFirstArgs} args - Arguments to find a DailyJournal
     * @example
     * // Get one DailyJournal
     * const dailyJournal = await prisma.dailyJournal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyJournalFindFirstArgs>(args?: SelectSubset<T, DailyJournalFindFirstArgs<ExtArgs>>): Prisma__DailyJournalClient<$Result.GetResult<Prisma.$DailyJournalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyJournal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyJournalFindFirstOrThrowArgs} args - Arguments to find a DailyJournal
     * @example
     * // Get one DailyJournal
     * const dailyJournal = await prisma.dailyJournal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyJournalFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyJournalFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyJournalClient<$Result.GetResult<Prisma.$DailyJournalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyJournals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyJournalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyJournals
     * const dailyJournals = await prisma.dailyJournal.findMany()
     * 
     * // Get first 10 DailyJournals
     * const dailyJournals = await prisma.dailyJournal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyJournalWithIdOnly = await prisma.dailyJournal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyJournalFindManyArgs>(args?: SelectSubset<T, DailyJournalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyJournalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyJournal.
     * @param {DailyJournalCreateArgs} args - Arguments to create a DailyJournal.
     * @example
     * // Create one DailyJournal
     * const DailyJournal = await prisma.dailyJournal.create({
     *   data: {
     *     // ... data to create a DailyJournal
     *   }
     * })
     * 
     */
    create<T extends DailyJournalCreateArgs>(args: SelectSubset<T, DailyJournalCreateArgs<ExtArgs>>): Prisma__DailyJournalClient<$Result.GetResult<Prisma.$DailyJournalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyJournals.
     * @param {DailyJournalCreateManyArgs} args - Arguments to create many DailyJournals.
     * @example
     * // Create many DailyJournals
     * const dailyJournal = await prisma.dailyJournal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyJournalCreateManyArgs>(args?: SelectSubset<T, DailyJournalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyJournals and returns the data saved in the database.
     * @param {DailyJournalCreateManyAndReturnArgs} args - Arguments to create many DailyJournals.
     * @example
     * // Create many DailyJournals
     * const dailyJournal = await prisma.dailyJournal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyJournals and only return the `id`
     * const dailyJournalWithIdOnly = await prisma.dailyJournal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyJournalCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyJournalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyJournalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyJournal.
     * @param {DailyJournalDeleteArgs} args - Arguments to delete one DailyJournal.
     * @example
     * // Delete one DailyJournal
     * const DailyJournal = await prisma.dailyJournal.delete({
     *   where: {
     *     // ... filter to delete one DailyJournal
     *   }
     * })
     * 
     */
    delete<T extends DailyJournalDeleteArgs>(args: SelectSubset<T, DailyJournalDeleteArgs<ExtArgs>>): Prisma__DailyJournalClient<$Result.GetResult<Prisma.$DailyJournalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyJournal.
     * @param {DailyJournalUpdateArgs} args - Arguments to update one DailyJournal.
     * @example
     * // Update one DailyJournal
     * const dailyJournal = await prisma.dailyJournal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyJournalUpdateArgs>(args: SelectSubset<T, DailyJournalUpdateArgs<ExtArgs>>): Prisma__DailyJournalClient<$Result.GetResult<Prisma.$DailyJournalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyJournals.
     * @param {DailyJournalDeleteManyArgs} args - Arguments to filter DailyJournals to delete.
     * @example
     * // Delete a few DailyJournals
     * const { count } = await prisma.dailyJournal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyJournalDeleteManyArgs>(args?: SelectSubset<T, DailyJournalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyJournals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyJournalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyJournals
     * const dailyJournal = await prisma.dailyJournal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyJournalUpdateManyArgs>(args: SelectSubset<T, DailyJournalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyJournals and returns the data updated in the database.
     * @param {DailyJournalUpdateManyAndReturnArgs} args - Arguments to update many DailyJournals.
     * @example
     * // Update many DailyJournals
     * const dailyJournal = await prisma.dailyJournal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyJournals and only return the `id`
     * const dailyJournalWithIdOnly = await prisma.dailyJournal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyJournalUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyJournalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyJournalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyJournal.
     * @param {DailyJournalUpsertArgs} args - Arguments to update or create a DailyJournal.
     * @example
     * // Update or create a DailyJournal
     * const dailyJournal = await prisma.dailyJournal.upsert({
     *   create: {
     *     // ... data to create a DailyJournal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyJournal we want to update
     *   }
     * })
     */
    upsert<T extends DailyJournalUpsertArgs>(args: SelectSubset<T, DailyJournalUpsertArgs<ExtArgs>>): Prisma__DailyJournalClient<$Result.GetResult<Prisma.$DailyJournalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyJournals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyJournalCountArgs} args - Arguments to filter DailyJournals to count.
     * @example
     * // Count the number of DailyJournals
     * const count = await prisma.dailyJournal.count({
     *   where: {
     *     // ... the filter for the DailyJournals we want to count
     *   }
     * })
    **/
    count<T extends DailyJournalCountArgs>(
      args?: Subset<T, DailyJournalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyJournalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyJournal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyJournalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyJournalAggregateArgs>(args: Subset<T, DailyJournalAggregateArgs>): Prisma.PrismaPromise<GetDailyJournalAggregateType<T>>

    /**
     * Group by DailyJournal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyJournalGroupByArgs} args - Group by arguments.
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
      T extends DailyJournalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyJournalGroupByArgs['orderBy'] }
        : { orderBy?: DailyJournalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyJournalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyJournalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyJournal model
   */
  readonly fields: DailyJournalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyJournal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyJournalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    santri<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DailyJournal model
   */
  interface DailyJournalFieldRefs {
    readonly id: FieldRef<"DailyJournal", 'String'>
    readonly santriId: FieldRef<"DailyJournal", 'String'>
    readonly classId: FieldRef<"DailyJournal", 'String'>
    readonly mentorId: FieldRef<"DailyJournal", 'String'>
    readonly attitudeScore: FieldRef<"DailyJournal", 'Float'>
    readonly notes: FieldRef<"DailyJournal", 'String'>
    readonly date: FieldRef<"DailyJournal", 'DateTime'>
    readonly description: FieldRef<"DailyJournal", 'String'>
    readonly tugasType: FieldRef<"DailyJournal", 'TugasType'>
    readonly createdAt: FieldRef<"DailyJournal", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyJournal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyJournal findUnique
   */
  export type DailyJournalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyJournal
     */
    select?: DailyJournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyJournal
     */
    omit?: DailyJournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyJournalInclude<ExtArgs> | null
    /**
     * Filter, which DailyJournal to fetch.
     */
    where: DailyJournalWhereUniqueInput
  }

  /**
   * DailyJournal findUniqueOrThrow
   */
  export type DailyJournalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyJournal
     */
    select?: DailyJournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyJournal
     */
    omit?: DailyJournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyJournalInclude<ExtArgs> | null
    /**
     * Filter, which DailyJournal to fetch.
     */
    where: DailyJournalWhereUniqueInput
  }

  /**
   * DailyJournal findFirst
   */
  export type DailyJournalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyJournal
     */
    select?: DailyJournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyJournal
     */
    omit?: DailyJournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyJournalInclude<ExtArgs> | null
    /**
     * Filter, which DailyJournal to fetch.
     */
    where?: DailyJournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyJournals to fetch.
     */
    orderBy?: DailyJournalOrderByWithRelationInput | DailyJournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyJournals.
     */
    cursor?: DailyJournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyJournals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyJournals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyJournals.
     */
    distinct?: DailyJournalScalarFieldEnum | DailyJournalScalarFieldEnum[]
  }

  /**
   * DailyJournal findFirstOrThrow
   */
  export type DailyJournalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyJournal
     */
    select?: DailyJournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyJournal
     */
    omit?: DailyJournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyJournalInclude<ExtArgs> | null
    /**
     * Filter, which DailyJournal to fetch.
     */
    where?: DailyJournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyJournals to fetch.
     */
    orderBy?: DailyJournalOrderByWithRelationInput | DailyJournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyJournals.
     */
    cursor?: DailyJournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyJournals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyJournals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyJournals.
     */
    distinct?: DailyJournalScalarFieldEnum | DailyJournalScalarFieldEnum[]
  }

  /**
   * DailyJournal findMany
   */
  export type DailyJournalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyJournal
     */
    select?: DailyJournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyJournal
     */
    omit?: DailyJournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyJournalInclude<ExtArgs> | null
    /**
     * Filter, which DailyJournals to fetch.
     */
    where?: DailyJournalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyJournals to fetch.
     */
    orderBy?: DailyJournalOrderByWithRelationInput | DailyJournalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyJournals.
     */
    cursor?: DailyJournalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyJournals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyJournals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyJournals.
     */
    distinct?: DailyJournalScalarFieldEnum | DailyJournalScalarFieldEnum[]
  }

  /**
   * DailyJournal create
   */
  export type DailyJournalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyJournal
     */
    select?: DailyJournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyJournal
     */
    omit?: DailyJournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyJournalInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyJournal.
     */
    data: XOR<DailyJournalCreateInput, DailyJournalUncheckedCreateInput>
  }

  /**
   * DailyJournal createMany
   */
  export type DailyJournalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyJournals.
     */
    data: DailyJournalCreateManyInput | DailyJournalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyJournal createManyAndReturn
   */
  export type DailyJournalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyJournal
     */
    select?: DailyJournalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyJournal
     */
    omit?: DailyJournalOmit<ExtArgs> | null
    /**
     * The data used to create many DailyJournals.
     */
    data: DailyJournalCreateManyInput | DailyJournalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyJournalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyJournal update
   */
  export type DailyJournalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyJournal
     */
    select?: DailyJournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyJournal
     */
    omit?: DailyJournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyJournalInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyJournal.
     */
    data: XOR<DailyJournalUpdateInput, DailyJournalUncheckedUpdateInput>
    /**
     * Choose, which DailyJournal to update.
     */
    where: DailyJournalWhereUniqueInput
  }

  /**
   * DailyJournal updateMany
   */
  export type DailyJournalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyJournals.
     */
    data: XOR<DailyJournalUpdateManyMutationInput, DailyJournalUncheckedUpdateManyInput>
    /**
     * Filter which DailyJournals to update
     */
    where?: DailyJournalWhereInput
    /**
     * Limit how many DailyJournals to update.
     */
    limit?: number
  }

  /**
   * DailyJournal updateManyAndReturn
   */
  export type DailyJournalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyJournal
     */
    select?: DailyJournalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyJournal
     */
    omit?: DailyJournalOmit<ExtArgs> | null
    /**
     * The data used to update DailyJournals.
     */
    data: XOR<DailyJournalUpdateManyMutationInput, DailyJournalUncheckedUpdateManyInput>
    /**
     * Filter which DailyJournals to update
     */
    where?: DailyJournalWhereInput
    /**
     * Limit how many DailyJournals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyJournalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyJournal upsert
   */
  export type DailyJournalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyJournal
     */
    select?: DailyJournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyJournal
     */
    omit?: DailyJournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyJournalInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyJournal to update in case it exists.
     */
    where: DailyJournalWhereUniqueInput
    /**
     * In case the DailyJournal found by the `where` argument doesn't exist, create a new DailyJournal with this data.
     */
    create: XOR<DailyJournalCreateInput, DailyJournalUncheckedCreateInput>
    /**
     * In case the DailyJournal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyJournalUpdateInput, DailyJournalUncheckedUpdateInput>
  }

  /**
   * DailyJournal delete
   */
  export type DailyJournalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyJournal
     */
    select?: DailyJournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyJournal
     */
    omit?: DailyJournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyJournalInclude<ExtArgs> | null
    /**
     * Filter which DailyJournal to delete.
     */
    where: DailyJournalWhereUniqueInput
  }

  /**
   * DailyJournal deleteMany
   */
  export type DailyJournalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyJournals to delete
     */
    where?: DailyJournalWhereInput
    /**
     * Limit how many DailyJournals to delete.
     */
    limit?: number
  }

  /**
   * DailyJournal without action
   */
  export type DailyJournalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyJournal
     */
    select?: DailyJournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyJournal
     */
    omit?: DailyJournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyJournalInclude<ExtArgs> | null
  }


  /**
   * Model Division
   */

  export type AggregateDivision = {
    _count: DivisionCountAggregateOutputType | null
    _min: DivisionMinAggregateOutputType | null
    _max: DivisionMaxAggregateOutputType | null
  }

  export type DivisionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type DivisionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type DivisionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    _all: number
  }


  export type DivisionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type DivisionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type DivisionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type DivisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Division to aggregate.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Divisions
    **/
    _count?: true | DivisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DivisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DivisionMaxAggregateInputType
  }

  export type GetDivisionAggregateType<T extends DivisionAggregateArgs> = {
        [P in keyof T & keyof AggregateDivision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDivision[P]>
      : GetScalarType<T[P], AggregateDivision[P]>
  }




  export type DivisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisionWhereInput
    orderBy?: DivisionOrderByWithAggregationInput | DivisionOrderByWithAggregationInput[]
    by: DivisionScalarFieldEnum[] | DivisionScalarFieldEnum
    having?: DivisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DivisionCountAggregateInputType | true
    _min?: DivisionMinAggregateInputType
    _max?: DivisionMaxAggregateInputType
  }

  export type DivisionGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    _count: DivisionCountAggregateOutputType | null
    _min: DivisionMinAggregateOutputType | null
    _max: DivisionMaxAggregateOutputType | null
  }

  type GetDivisionGroupByPayload<T extends DivisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DivisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DivisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DivisionGroupByOutputType[P]>
            : GetScalarType<T[P], DivisionGroupByOutputType[P]>
        }
      >
    >


  export type DivisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    classes?: boolean | Division$classesArgs<ExtArgs>
    _count?: boolean | DivisionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["division"]>

  export type DivisionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["division"]>

  export type DivisionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["division"]>

  export type DivisionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type DivisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt", ExtArgs["result"]["division"]>
  export type DivisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | Division$classesArgs<ExtArgs>
    _count?: boolean | DivisionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DivisionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DivisionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DivisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Division"
    objects: {
      classes: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["division"]>
    composites: {}
  }

  type DivisionGetPayload<S extends boolean | null | undefined | DivisionDefaultArgs> = $Result.GetResult<Prisma.$DivisionPayload, S>

  type DivisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DivisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DivisionCountAggregateInputType | true
    }

  export interface DivisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Division'], meta: { name: 'Division' } }
    /**
     * Find zero or one Division that matches the filter.
     * @param {DivisionFindUniqueArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DivisionFindUniqueArgs>(args: SelectSubset<T, DivisionFindUniqueArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Division that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DivisionFindUniqueOrThrowArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DivisionFindUniqueOrThrowArgs>(args: SelectSubset<T, DivisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Division that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindFirstArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DivisionFindFirstArgs>(args?: SelectSubset<T, DivisionFindFirstArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Division that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindFirstOrThrowArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DivisionFindFirstOrThrowArgs>(args?: SelectSubset<T, DivisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Divisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Divisions
     * const divisions = await prisma.division.findMany()
     * 
     * // Get first 10 Divisions
     * const divisions = await prisma.division.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const divisionWithIdOnly = await prisma.division.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DivisionFindManyArgs>(args?: SelectSubset<T, DivisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Division.
     * @param {DivisionCreateArgs} args - Arguments to create a Division.
     * @example
     * // Create one Division
     * const Division = await prisma.division.create({
     *   data: {
     *     // ... data to create a Division
     *   }
     * })
     * 
     */
    create<T extends DivisionCreateArgs>(args: SelectSubset<T, DivisionCreateArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Divisions.
     * @param {DivisionCreateManyArgs} args - Arguments to create many Divisions.
     * @example
     * // Create many Divisions
     * const division = await prisma.division.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DivisionCreateManyArgs>(args?: SelectSubset<T, DivisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Divisions and returns the data saved in the database.
     * @param {DivisionCreateManyAndReturnArgs} args - Arguments to create many Divisions.
     * @example
     * // Create many Divisions
     * const division = await prisma.division.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Divisions and only return the `id`
     * const divisionWithIdOnly = await prisma.division.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DivisionCreateManyAndReturnArgs>(args?: SelectSubset<T, DivisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Division.
     * @param {DivisionDeleteArgs} args - Arguments to delete one Division.
     * @example
     * // Delete one Division
     * const Division = await prisma.division.delete({
     *   where: {
     *     // ... filter to delete one Division
     *   }
     * })
     * 
     */
    delete<T extends DivisionDeleteArgs>(args: SelectSubset<T, DivisionDeleteArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Division.
     * @param {DivisionUpdateArgs} args - Arguments to update one Division.
     * @example
     * // Update one Division
     * const division = await prisma.division.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DivisionUpdateArgs>(args: SelectSubset<T, DivisionUpdateArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Divisions.
     * @param {DivisionDeleteManyArgs} args - Arguments to filter Divisions to delete.
     * @example
     * // Delete a few Divisions
     * const { count } = await prisma.division.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DivisionDeleteManyArgs>(args?: SelectSubset<T, DivisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Divisions
     * const division = await prisma.division.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DivisionUpdateManyArgs>(args: SelectSubset<T, DivisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisions and returns the data updated in the database.
     * @param {DivisionUpdateManyAndReturnArgs} args - Arguments to update many Divisions.
     * @example
     * // Update many Divisions
     * const division = await prisma.division.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Divisions and only return the `id`
     * const divisionWithIdOnly = await prisma.division.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DivisionUpdateManyAndReturnArgs>(args: SelectSubset<T, DivisionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Division.
     * @param {DivisionUpsertArgs} args - Arguments to update or create a Division.
     * @example
     * // Update or create a Division
     * const division = await prisma.division.upsert({
     *   create: {
     *     // ... data to create a Division
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Division we want to update
     *   }
     * })
     */
    upsert<T extends DivisionUpsertArgs>(args: SelectSubset<T, DivisionUpsertArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionCountArgs} args - Arguments to filter Divisions to count.
     * @example
     * // Count the number of Divisions
     * const count = await prisma.division.count({
     *   where: {
     *     // ... the filter for the Divisions we want to count
     *   }
     * })
    **/
    count<T extends DivisionCountArgs>(
      args?: Subset<T, DivisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DivisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Division.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DivisionAggregateArgs>(args: Subset<T, DivisionAggregateArgs>): Prisma.PrismaPromise<GetDivisionAggregateType<T>>

    /**
     * Group by Division.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionGroupByArgs} args - Group by arguments.
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
      T extends DivisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DivisionGroupByArgs['orderBy'] }
        : { orderBy?: DivisionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DivisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDivisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Division model
   */
  readonly fields: DivisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Division.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DivisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends Division$classesArgs<ExtArgs> = {}>(args?: Subset<T, Division$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Division model
   */
  interface DivisionFieldRefs {
    readonly id: FieldRef<"Division", 'String'>
    readonly name: FieldRef<"Division", 'String'>
    readonly description: FieldRef<"Division", 'String'>
    readonly createdAt: FieldRef<"Division", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Division findUnique
   */
  export type DivisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division findUniqueOrThrow
   */
  export type DivisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division findFirst
   */
  export type DivisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }

  /**
   * Division findFirstOrThrow
   */
  export type DivisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }

  /**
   * Division findMany
   */
  export type DivisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Divisions to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }

  /**
   * Division create
   */
  export type DivisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * The data needed to create a Division.
     */
    data: XOR<DivisionCreateInput, DivisionUncheckedCreateInput>
  }

  /**
   * Division createMany
   */
  export type DivisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Divisions.
     */
    data: DivisionCreateManyInput | DivisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Division createManyAndReturn
   */
  export type DivisionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * The data used to create many Divisions.
     */
    data: DivisionCreateManyInput | DivisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Division update
   */
  export type DivisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * The data needed to update a Division.
     */
    data: XOR<DivisionUpdateInput, DivisionUncheckedUpdateInput>
    /**
     * Choose, which Division to update.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division updateMany
   */
  export type DivisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Divisions.
     */
    data: XOR<DivisionUpdateManyMutationInput, DivisionUncheckedUpdateManyInput>
    /**
     * Filter which Divisions to update
     */
    where?: DivisionWhereInput
    /**
     * Limit how many Divisions to update.
     */
    limit?: number
  }

  /**
   * Division updateManyAndReturn
   */
  export type DivisionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * The data used to update Divisions.
     */
    data: XOR<DivisionUpdateManyMutationInput, DivisionUncheckedUpdateManyInput>
    /**
     * Filter which Divisions to update
     */
    where?: DivisionWhereInput
    /**
     * Limit how many Divisions to update.
     */
    limit?: number
  }

  /**
   * Division upsert
   */
  export type DivisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * The filter to search for the Division to update in case it exists.
     */
    where: DivisionWhereUniqueInput
    /**
     * In case the Division found by the `where` argument doesn't exist, create a new Division with this data.
     */
    create: XOR<DivisionCreateInput, DivisionUncheckedCreateInput>
    /**
     * In case the Division was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DivisionUpdateInput, DivisionUncheckedUpdateInput>
  }

  /**
   * Division delete
   */
  export type DivisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter which Division to delete.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division deleteMany
   */
  export type DivisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Divisions to delete
     */
    where?: DivisionWhereInput
    /**
     * Limit how many Divisions to delete.
     */
    limit?: number
  }

  /**
   * Division.classes
   */
  export type Division$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Division without action
   */
  export type DivisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
  }


  /**
   * Model MonthlyEvaluation
   */

  export type AggregateMonthlyEvaluation = {
    _count: MonthlyEvaluationCountAggregateOutputType | null
    _avg: MonthlyEvaluationAvgAggregateOutputType | null
    _sum: MonthlyEvaluationSumAggregateOutputType | null
    _min: MonthlyEvaluationMinAggregateOutputType | null
    _max: MonthlyEvaluationMaxAggregateOutputType | null
  }

  export type MonthlyEvaluationAvgAggregateOutputType = {
    month: number | null
    year: number | null
    taskAvg: number | null
    attendancePoin: number | null
    maxAttendPoin: number | null
    attitudeAvg: number | null
    taskScore: number | null
    attendanceScore: number | null
    attitudeScore: number | null
    finalScore: number | null
  }

  export type MonthlyEvaluationSumAggregateOutputType = {
    month: number | null
    year: number | null
    taskAvg: number | null
    attendancePoin: number | null
    maxAttendPoin: number | null
    attitudeAvg: number | null
    taskScore: number | null
    attendanceScore: number | null
    attitudeScore: number | null
    finalScore: number | null
  }

  export type MonthlyEvaluationMinAggregateOutputType = {
    id: string | null
    santriId: string | null
    classId: string | null
    month: number | null
    year: number | null
    taskAvg: number | null
    attendancePoin: number | null
    maxAttendPoin: number | null
    attitudeAvg: number | null
    taskScore: number | null
    attendanceScore: number | null
    attitudeScore: number | null
    finalScore: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyEvaluationMaxAggregateOutputType = {
    id: string | null
    santriId: string | null
    classId: string | null
    month: number | null
    year: number | null
    taskAvg: number | null
    attendancePoin: number | null
    maxAttendPoin: number | null
    attitudeAvg: number | null
    taskScore: number | null
    attendanceScore: number | null
    attitudeScore: number | null
    finalScore: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyEvaluationCountAggregateOutputType = {
    id: number
    santriId: number
    classId: number
    month: number
    year: number
    taskAvg: number
    attendancePoin: number
    maxAttendPoin: number
    attitudeAvg: number
    taskScore: number
    attendanceScore: number
    attitudeScore: number
    finalScore: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MonthlyEvaluationAvgAggregateInputType = {
    month?: true
    year?: true
    taskAvg?: true
    attendancePoin?: true
    maxAttendPoin?: true
    attitudeAvg?: true
    taskScore?: true
    attendanceScore?: true
    attitudeScore?: true
    finalScore?: true
  }

  export type MonthlyEvaluationSumAggregateInputType = {
    month?: true
    year?: true
    taskAvg?: true
    attendancePoin?: true
    maxAttendPoin?: true
    attitudeAvg?: true
    taskScore?: true
    attendanceScore?: true
    attitudeScore?: true
    finalScore?: true
  }

  export type MonthlyEvaluationMinAggregateInputType = {
    id?: true
    santriId?: true
    classId?: true
    month?: true
    year?: true
    taskAvg?: true
    attendancePoin?: true
    maxAttendPoin?: true
    attitudeAvg?: true
    taskScore?: true
    attendanceScore?: true
    attitudeScore?: true
    finalScore?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonthlyEvaluationMaxAggregateInputType = {
    id?: true
    santriId?: true
    classId?: true
    month?: true
    year?: true
    taskAvg?: true
    attendancePoin?: true
    maxAttendPoin?: true
    attitudeAvg?: true
    taskScore?: true
    attendanceScore?: true
    attitudeScore?: true
    finalScore?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonthlyEvaluationCountAggregateInputType = {
    id?: true
    santriId?: true
    classId?: true
    month?: true
    year?: true
    taskAvg?: true
    attendancePoin?: true
    maxAttendPoin?: true
    attitudeAvg?: true
    taskScore?: true
    attendanceScore?: true
    attitudeScore?: true
    finalScore?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MonthlyEvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyEvaluation to aggregate.
     */
    where?: MonthlyEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyEvaluations to fetch.
     */
    orderBy?: MonthlyEvaluationOrderByWithRelationInput | MonthlyEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyEvaluations
    **/
    _count?: true | MonthlyEvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyEvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyEvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyEvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyEvaluationMaxAggregateInputType
  }

  export type GetMonthlyEvaluationAggregateType<T extends MonthlyEvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyEvaluation[P]>
      : GetScalarType<T[P], AggregateMonthlyEvaluation[P]>
  }




  export type MonthlyEvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyEvaluationWhereInput
    orderBy?: MonthlyEvaluationOrderByWithAggregationInput | MonthlyEvaluationOrderByWithAggregationInput[]
    by: MonthlyEvaluationScalarFieldEnum[] | MonthlyEvaluationScalarFieldEnum
    having?: MonthlyEvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyEvaluationCountAggregateInputType | true
    _avg?: MonthlyEvaluationAvgAggregateInputType
    _sum?: MonthlyEvaluationSumAggregateInputType
    _min?: MonthlyEvaluationMinAggregateInputType
    _max?: MonthlyEvaluationMaxAggregateInputType
  }

  export type MonthlyEvaluationGroupByOutputType = {
    id: string
    santriId: string
    classId: string
    month: number
    year: number
    taskAvg: number
    attendancePoin: number
    maxAttendPoin: number
    attitudeAvg: number
    taskScore: number
    attendanceScore: number
    attitudeScore: number
    finalScore: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: MonthlyEvaluationCountAggregateOutputType | null
    _avg: MonthlyEvaluationAvgAggregateOutputType | null
    _sum: MonthlyEvaluationSumAggregateOutputType | null
    _min: MonthlyEvaluationMinAggregateOutputType | null
    _max: MonthlyEvaluationMaxAggregateOutputType | null
  }

  type GetMonthlyEvaluationGroupByPayload<T extends MonthlyEvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyEvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyEvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyEvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyEvaluationGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyEvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    santriId?: boolean
    classId?: boolean
    month?: boolean
    year?: boolean
    taskAvg?: boolean
    attendancePoin?: boolean
    maxAttendPoin?: boolean
    attitudeAvg?: boolean
    taskScore?: boolean
    attendanceScore?: boolean
    attitudeScore?: boolean
    finalScore?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    santri?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyEvaluation"]>

  export type MonthlyEvaluationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    santriId?: boolean
    classId?: boolean
    month?: boolean
    year?: boolean
    taskAvg?: boolean
    attendancePoin?: boolean
    maxAttendPoin?: boolean
    attitudeAvg?: boolean
    taskScore?: boolean
    attendanceScore?: boolean
    attitudeScore?: boolean
    finalScore?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    santri?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyEvaluation"]>

  export type MonthlyEvaluationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    santriId?: boolean
    classId?: boolean
    month?: boolean
    year?: boolean
    taskAvg?: boolean
    attendancePoin?: boolean
    maxAttendPoin?: boolean
    attitudeAvg?: boolean
    taskScore?: boolean
    attendanceScore?: boolean
    attitudeScore?: boolean
    finalScore?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    santri?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyEvaluation"]>

  export type MonthlyEvaluationSelectScalar = {
    id?: boolean
    santriId?: boolean
    classId?: boolean
    month?: boolean
    year?: boolean
    taskAvg?: boolean
    attendancePoin?: boolean
    maxAttendPoin?: boolean
    attitudeAvg?: boolean
    taskScore?: boolean
    attendanceScore?: boolean
    attitudeScore?: boolean
    finalScore?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MonthlyEvaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "santriId" | "classId" | "month" | "year" | "taskAvg" | "attendancePoin" | "maxAttendPoin" | "attitudeAvg" | "taskScore" | "attendanceScore" | "attitudeScore" | "finalScore" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["monthlyEvaluation"]>
  export type MonthlyEvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    santri?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type MonthlyEvaluationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    santri?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type MonthlyEvaluationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    santri?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $MonthlyEvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyEvaluation"
    objects: {
      santri: Prisma.$UserPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      santriId: string
      classId: string
      month: number
      year: number
      taskAvg: number
      attendancePoin: number
      maxAttendPoin: number
      attitudeAvg: number
      taskScore: number
      attendanceScore: number
      attitudeScore: number
      finalScore: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["monthlyEvaluation"]>
    composites: {}
  }

  type MonthlyEvaluationGetPayload<S extends boolean | null | undefined | MonthlyEvaluationDefaultArgs> = $Result.GetResult<Prisma.$MonthlyEvaluationPayload, S>

  type MonthlyEvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthlyEvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthlyEvaluationCountAggregateInputType | true
    }

  export interface MonthlyEvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyEvaluation'], meta: { name: 'MonthlyEvaluation' } }
    /**
     * Find zero or one MonthlyEvaluation that matches the filter.
     * @param {MonthlyEvaluationFindUniqueArgs} args - Arguments to find a MonthlyEvaluation
     * @example
     * // Get one MonthlyEvaluation
     * const monthlyEvaluation = await prisma.monthlyEvaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyEvaluationFindUniqueArgs>(args: SelectSubset<T, MonthlyEvaluationFindUniqueArgs<ExtArgs>>): Prisma__MonthlyEvaluationClient<$Result.GetResult<Prisma.$MonthlyEvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthlyEvaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlyEvaluationFindUniqueOrThrowArgs} args - Arguments to find a MonthlyEvaluation
     * @example
     * // Get one MonthlyEvaluation
     * const monthlyEvaluation = await prisma.monthlyEvaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyEvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyEvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyEvaluationClient<$Result.GetResult<Prisma.$MonthlyEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyEvaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyEvaluationFindFirstArgs} args - Arguments to find a MonthlyEvaluation
     * @example
     * // Get one MonthlyEvaluation
     * const monthlyEvaluation = await prisma.monthlyEvaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyEvaluationFindFirstArgs>(args?: SelectSubset<T, MonthlyEvaluationFindFirstArgs<ExtArgs>>): Prisma__MonthlyEvaluationClient<$Result.GetResult<Prisma.$MonthlyEvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyEvaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyEvaluationFindFirstOrThrowArgs} args - Arguments to find a MonthlyEvaluation
     * @example
     * // Get one MonthlyEvaluation
     * const monthlyEvaluation = await prisma.monthlyEvaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyEvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyEvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyEvaluationClient<$Result.GetResult<Prisma.$MonthlyEvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthlyEvaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyEvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyEvaluations
     * const monthlyEvaluations = await prisma.monthlyEvaluation.findMany()
     * 
     * // Get first 10 MonthlyEvaluations
     * const monthlyEvaluations = await prisma.monthlyEvaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyEvaluationWithIdOnly = await prisma.monthlyEvaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlyEvaluationFindManyArgs>(args?: SelectSubset<T, MonthlyEvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthlyEvaluation.
     * @param {MonthlyEvaluationCreateArgs} args - Arguments to create a MonthlyEvaluation.
     * @example
     * // Create one MonthlyEvaluation
     * const MonthlyEvaluation = await prisma.monthlyEvaluation.create({
     *   data: {
     *     // ... data to create a MonthlyEvaluation
     *   }
     * })
     * 
     */
    create<T extends MonthlyEvaluationCreateArgs>(args: SelectSubset<T, MonthlyEvaluationCreateArgs<ExtArgs>>): Prisma__MonthlyEvaluationClient<$Result.GetResult<Prisma.$MonthlyEvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthlyEvaluations.
     * @param {MonthlyEvaluationCreateManyArgs} args - Arguments to create many MonthlyEvaluations.
     * @example
     * // Create many MonthlyEvaluations
     * const monthlyEvaluation = await prisma.monthlyEvaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyEvaluationCreateManyArgs>(args?: SelectSubset<T, MonthlyEvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonthlyEvaluations and returns the data saved in the database.
     * @param {MonthlyEvaluationCreateManyAndReturnArgs} args - Arguments to create many MonthlyEvaluations.
     * @example
     * // Create many MonthlyEvaluations
     * const monthlyEvaluation = await prisma.monthlyEvaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonthlyEvaluations and only return the `id`
     * const monthlyEvaluationWithIdOnly = await prisma.monthlyEvaluation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthlyEvaluationCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthlyEvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyEvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonthlyEvaluation.
     * @param {MonthlyEvaluationDeleteArgs} args - Arguments to delete one MonthlyEvaluation.
     * @example
     * // Delete one MonthlyEvaluation
     * const MonthlyEvaluation = await prisma.monthlyEvaluation.delete({
     *   where: {
     *     // ... filter to delete one MonthlyEvaluation
     *   }
     * })
     * 
     */
    delete<T extends MonthlyEvaluationDeleteArgs>(args: SelectSubset<T, MonthlyEvaluationDeleteArgs<ExtArgs>>): Prisma__MonthlyEvaluationClient<$Result.GetResult<Prisma.$MonthlyEvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthlyEvaluation.
     * @param {MonthlyEvaluationUpdateArgs} args - Arguments to update one MonthlyEvaluation.
     * @example
     * // Update one MonthlyEvaluation
     * const monthlyEvaluation = await prisma.monthlyEvaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyEvaluationUpdateArgs>(args: SelectSubset<T, MonthlyEvaluationUpdateArgs<ExtArgs>>): Prisma__MonthlyEvaluationClient<$Result.GetResult<Prisma.$MonthlyEvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthlyEvaluations.
     * @param {MonthlyEvaluationDeleteManyArgs} args - Arguments to filter MonthlyEvaluations to delete.
     * @example
     * // Delete a few MonthlyEvaluations
     * const { count } = await prisma.monthlyEvaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyEvaluationDeleteManyArgs>(args?: SelectSubset<T, MonthlyEvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyEvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyEvaluations
     * const monthlyEvaluation = await prisma.monthlyEvaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyEvaluationUpdateManyArgs>(args: SelectSubset<T, MonthlyEvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyEvaluations and returns the data updated in the database.
     * @param {MonthlyEvaluationUpdateManyAndReturnArgs} args - Arguments to update many MonthlyEvaluations.
     * @example
     * // Update many MonthlyEvaluations
     * const monthlyEvaluation = await prisma.monthlyEvaluation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonthlyEvaluations and only return the `id`
     * const monthlyEvaluationWithIdOnly = await prisma.monthlyEvaluation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonthlyEvaluationUpdateManyAndReturnArgs>(args: SelectSubset<T, MonthlyEvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyEvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonthlyEvaluation.
     * @param {MonthlyEvaluationUpsertArgs} args - Arguments to update or create a MonthlyEvaluation.
     * @example
     * // Update or create a MonthlyEvaluation
     * const monthlyEvaluation = await prisma.monthlyEvaluation.upsert({
     *   create: {
     *     // ... data to create a MonthlyEvaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyEvaluation we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyEvaluationUpsertArgs>(args: SelectSubset<T, MonthlyEvaluationUpsertArgs<ExtArgs>>): Prisma__MonthlyEvaluationClient<$Result.GetResult<Prisma.$MonthlyEvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthlyEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyEvaluationCountArgs} args - Arguments to filter MonthlyEvaluations to count.
     * @example
     * // Count the number of MonthlyEvaluations
     * const count = await prisma.monthlyEvaluation.count({
     *   where: {
     *     // ... the filter for the MonthlyEvaluations we want to count
     *   }
     * })
    **/
    count<T extends MonthlyEvaluationCountArgs>(
      args?: Subset<T, MonthlyEvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyEvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyEvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonthlyEvaluationAggregateArgs>(args: Subset<T, MonthlyEvaluationAggregateArgs>): Prisma.PrismaPromise<GetMonthlyEvaluationAggregateType<T>>

    /**
     * Group by MonthlyEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyEvaluationGroupByArgs} args - Group by arguments.
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
      T extends MonthlyEvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyEvaluationGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyEvaluationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonthlyEvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyEvaluation model
   */
  readonly fields: MonthlyEvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyEvaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyEvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    santri<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MonthlyEvaluation model
   */
  interface MonthlyEvaluationFieldRefs {
    readonly id: FieldRef<"MonthlyEvaluation", 'String'>
    readonly santriId: FieldRef<"MonthlyEvaluation", 'String'>
    readonly classId: FieldRef<"MonthlyEvaluation", 'String'>
    readonly month: FieldRef<"MonthlyEvaluation", 'Int'>
    readonly year: FieldRef<"MonthlyEvaluation", 'Int'>
    readonly taskAvg: FieldRef<"MonthlyEvaluation", 'Float'>
    readonly attendancePoin: FieldRef<"MonthlyEvaluation", 'Int'>
    readonly maxAttendPoin: FieldRef<"MonthlyEvaluation", 'Int'>
    readonly attitudeAvg: FieldRef<"MonthlyEvaluation", 'Float'>
    readonly taskScore: FieldRef<"MonthlyEvaluation", 'Float'>
    readonly attendanceScore: FieldRef<"MonthlyEvaluation", 'Float'>
    readonly attitudeScore: FieldRef<"MonthlyEvaluation", 'Float'>
    readonly finalScore: FieldRef<"MonthlyEvaluation", 'Float'>
    readonly notes: FieldRef<"MonthlyEvaluation", 'String'>
    readonly createdAt: FieldRef<"MonthlyEvaluation", 'DateTime'>
    readonly updatedAt: FieldRef<"MonthlyEvaluation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyEvaluation findUnique
   */
  export type MonthlyEvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEvaluation
     */
    select?: MonthlyEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEvaluation
     */
    omit?: MonthlyEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyEvaluation to fetch.
     */
    where: MonthlyEvaluationWhereUniqueInput
  }

  /**
   * MonthlyEvaluation findUniqueOrThrow
   */
  export type MonthlyEvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEvaluation
     */
    select?: MonthlyEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEvaluation
     */
    omit?: MonthlyEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyEvaluation to fetch.
     */
    where: MonthlyEvaluationWhereUniqueInput
  }

  /**
   * MonthlyEvaluation findFirst
   */
  export type MonthlyEvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEvaluation
     */
    select?: MonthlyEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEvaluation
     */
    omit?: MonthlyEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyEvaluation to fetch.
     */
    where?: MonthlyEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyEvaluations to fetch.
     */
    orderBy?: MonthlyEvaluationOrderByWithRelationInput | MonthlyEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyEvaluations.
     */
    cursor?: MonthlyEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyEvaluations.
     */
    distinct?: MonthlyEvaluationScalarFieldEnum | MonthlyEvaluationScalarFieldEnum[]
  }

  /**
   * MonthlyEvaluation findFirstOrThrow
   */
  export type MonthlyEvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEvaluation
     */
    select?: MonthlyEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEvaluation
     */
    omit?: MonthlyEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyEvaluation to fetch.
     */
    where?: MonthlyEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyEvaluations to fetch.
     */
    orderBy?: MonthlyEvaluationOrderByWithRelationInput | MonthlyEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyEvaluations.
     */
    cursor?: MonthlyEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyEvaluations.
     */
    distinct?: MonthlyEvaluationScalarFieldEnum | MonthlyEvaluationScalarFieldEnum[]
  }

  /**
   * MonthlyEvaluation findMany
   */
  export type MonthlyEvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEvaluation
     */
    select?: MonthlyEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEvaluation
     */
    omit?: MonthlyEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyEvaluations to fetch.
     */
    where?: MonthlyEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyEvaluations to fetch.
     */
    orderBy?: MonthlyEvaluationOrderByWithRelationInput | MonthlyEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyEvaluations.
     */
    cursor?: MonthlyEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyEvaluations.
     */
    distinct?: MonthlyEvaluationScalarFieldEnum | MonthlyEvaluationScalarFieldEnum[]
  }

  /**
   * MonthlyEvaluation create
   */
  export type MonthlyEvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEvaluation
     */
    select?: MonthlyEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEvaluation
     */
    omit?: MonthlyEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyEvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a MonthlyEvaluation.
     */
    data: XOR<MonthlyEvaluationCreateInput, MonthlyEvaluationUncheckedCreateInput>
  }

  /**
   * MonthlyEvaluation createMany
   */
  export type MonthlyEvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyEvaluations.
     */
    data: MonthlyEvaluationCreateManyInput | MonthlyEvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyEvaluation createManyAndReturn
   */
  export type MonthlyEvaluationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEvaluation
     */
    select?: MonthlyEvaluationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEvaluation
     */
    omit?: MonthlyEvaluationOmit<ExtArgs> | null
    /**
     * The data used to create many MonthlyEvaluations.
     */
    data: MonthlyEvaluationCreateManyInput | MonthlyEvaluationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyEvaluationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonthlyEvaluation update
   */
  export type MonthlyEvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEvaluation
     */
    select?: MonthlyEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEvaluation
     */
    omit?: MonthlyEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyEvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a MonthlyEvaluation.
     */
    data: XOR<MonthlyEvaluationUpdateInput, MonthlyEvaluationUncheckedUpdateInput>
    /**
     * Choose, which MonthlyEvaluation to update.
     */
    where: MonthlyEvaluationWhereUniqueInput
  }

  /**
   * MonthlyEvaluation updateMany
   */
  export type MonthlyEvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyEvaluations.
     */
    data: XOR<MonthlyEvaluationUpdateManyMutationInput, MonthlyEvaluationUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyEvaluations to update
     */
    where?: MonthlyEvaluationWhereInput
    /**
     * Limit how many MonthlyEvaluations to update.
     */
    limit?: number
  }

  /**
   * MonthlyEvaluation updateManyAndReturn
   */
  export type MonthlyEvaluationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEvaluation
     */
    select?: MonthlyEvaluationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEvaluation
     */
    omit?: MonthlyEvaluationOmit<ExtArgs> | null
    /**
     * The data used to update MonthlyEvaluations.
     */
    data: XOR<MonthlyEvaluationUpdateManyMutationInput, MonthlyEvaluationUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyEvaluations to update
     */
    where?: MonthlyEvaluationWhereInput
    /**
     * Limit how many MonthlyEvaluations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyEvaluationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonthlyEvaluation upsert
   */
  export type MonthlyEvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEvaluation
     */
    select?: MonthlyEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEvaluation
     */
    omit?: MonthlyEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyEvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the MonthlyEvaluation to update in case it exists.
     */
    where: MonthlyEvaluationWhereUniqueInput
    /**
     * In case the MonthlyEvaluation found by the `where` argument doesn't exist, create a new MonthlyEvaluation with this data.
     */
    create: XOR<MonthlyEvaluationCreateInput, MonthlyEvaluationUncheckedCreateInput>
    /**
     * In case the MonthlyEvaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyEvaluationUpdateInput, MonthlyEvaluationUncheckedUpdateInput>
  }

  /**
   * MonthlyEvaluation delete
   */
  export type MonthlyEvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEvaluation
     */
    select?: MonthlyEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEvaluation
     */
    omit?: MonthlyEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyEvaluationInclude<ExtArgs> | null
    /**
     * Filter which MonthlyEvaluation to delete.
     */
    where: MonthlyEvaluationWhereUniqueInput
  }

  /**
   * MonthlyEvaluation deleteMany
   */
  export type MonthlyEvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyEvaluations to delete
     */
    where?: MonthlyEvaluationWhereInput
    /**
     * Limit how many MonthlyEvaluations to delete.
     */
    limit?: number
  }

  /**
   * MonthlyEvaluation without action
   */
  export type MonthlyEvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEvaluation
     */
    select?: MonthlyEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEvaluation
     */
    omit?: MonthlyEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyEvaluationInclude<ExtArgs> | null
  }


  /**
   * Model SantriProfile
   */

  export type AggregateSantriProfile = {
    _count: SantriProfileCountAggregateOutputType | null
    _min: SantriProfileMinAggregateOutputType | null
    _max: SantriProfileMaxAggregateOutputType | null
  }

  export type SantriProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gender: $Enums.Gender | null
    phone: string | null
    birthDate: Date | null
    address: string | null
    photoUrl: string | null
    classId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SantriProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gender: $Enums.Gender | null
    phone: string | null
    birthDate: Date | null
    address: string | null
    photoUrl: string | null
    classId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SantriProfileCountAggregateOutputType = {
    id: number
    userId: number
    gender: number
    phone: number
    birthDate: number
    address: number
    photoUrl: number
    classId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SantriProfileMinAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    phone?: true
    birthDate?: true
    address?: true
    photoUrl?: true
    classId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SantriProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    phone?: true
    birthDate?: true
    address?: true
    photoUrl?: true
    classId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SantriProfileCountAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    phone?: true
    birthDate?: true
    address?: true
    photoUrl?: true
    classId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SantriProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SantriProfile to aggregate.
     */
    where?: SantriProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SantriProfiles to fetch.
     */
    orderBy?: SantriProfileOrderByWithRelationInput | SantriProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SantriProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SantriProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SantriProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SantriProfiles
    **/
    _count?: true | SantriProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SantriProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SantriProfileMaxAggregateInputType
  }

  export type GetSantriProfileAggregateType<T extends SantriProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSantriProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSantriProfile[P]>
      : GetScalarType<T[P], AggregateSantriProfile[P]>
  }




  export type SantriProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SantriProfileWhereInput
    orderBy?: SantriProfileOrderByWithAggregationInput | SantriProfileOrderByWithAggregationInput[]
    by: SantriProfileScalarFieldEnum[] | SantriProfileScalarFieldEnum
    having?: SantriProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SantriProfileCountAggregateInputType | true
    _min?: SantriProfileMinAggregateInputType
    _max?: SantriProfileMaxAggregateInputType
  }

  export type SantriProfileGroupByOutputType = {
    id: string
    userId: string
    gender: $Enums.Gender | null
    phone: string | null
    birthDate: Date | null
    address: string | null
    photoUrl: string | null
    classId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SantriProfileCountAggregateOutputType | null
    _min: SantriProfileMinAggregateOutputType | null
    _max: SantriProfileMaxAggregateOutputType | null
  }

  type GetSantriProfileGroupByPayload<T extends SantriProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SantriProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SantriProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SantriProfileGroupByOutputType[P]>
            : GetScalarType<T[P], SantriProfileGroupByOutputType[P]>
        }
      >
    >


  export type SantriProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    phone?: boolean
    birthDate?: boolean
    address?: boolean
    photoUrl?: boolean
    classId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | SantriProfile$classArgs<ExtArgs>
  }, ExtArgs["result"]["santriProfile"]>

  export type SantriProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    phone?: boolean
    birthDate?: boolean
    address?: boolean
    photoUrl?: boolean
    classId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | SantriProfile$classArgs<ExtArgs>
  }, ExtArgs["result"]["santriProfile"]>

  export type SantriProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    phone?: boolean
    birthDate?: boolean
    address?: boolean
    photoUrl?: boolean
    classId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | SantriProfile$classArgs<ExtArgs>
  }, ExtArgs["result"]["santriProfile"]>

  export type SantriProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    gender?: boolean
    phone?: boolean
    birthDate?: boolean
    address?: boolean
    photoUrl?: boolean
    classId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SantriProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gender" | "phone" | "birthDate" | "address" | "photoUrl" | "classId" | "createdAt" | "updatedAt", ExtArgs["result"]["santriProfile"]>
  export type SantriProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | SantriProfile$classArgs<ExtArgs>
  }
  export type SantriProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | SantriProfile$classArgs<ExtArgs>
  }
  export type SantriProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | SantriProfile$classArgs<ExtArgs>
  }

  export type $SantriProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SantriProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gender: $Enums.Gender | null
      phone: string | null
      birthDate: Date | null
      address: string | null
      photoUrl: string | null
      classId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["santriProfile"]>
    composites: {}
  }

  type SantriProfileGetPayload<S extends boolean | null | undefined | SantriProfileDefaultArgs> = $Result.GetResult<Prisma.$SantriProfilePayload, S>

  type SantriProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SantriProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SantriProfileCountAggregateInputType | true
    }

  export interface SantriProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SantriProfile'], meta: { name: 'SantriProfile' } }
    /**
     * Find zero or one SantriProfile that matches the filter.
     * @param {SantriProfileFindUniqueArgs} args - Arguments to find a SantriProfile
     * @example
     * // Get one SantriProfile
     * const santriProfile = await prisma.santriProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SantriProfileFindUniqueArgs>(args: SelectSubset<T, SantriProfileFindUniqueArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SantriProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SantriProfileFindUniqueOrThrowArgs} args - Arguments to find a SantriProfile
     * @example
     * // Get one SantriProfile
     * const santriProfile = await prisma.santriProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SantriProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, SantriProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SantriProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriProfileFindFirstArgs} args - Arguments to find a SantriProfile
     * @example
     * // Get one SantriProfile
     * const santriProfile = await prisma.santriProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SantriProfileFindFirstArgs>(args?: SelectSubset<T, SantriProfileFindFirstArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SantriProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriProfileFindFirstOrThrowArgs} args - Arguments to find a SantriProfile
     * @example
     * // Get one SantriProfile
     * const santriProfile = await prisma.santriProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SantriProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, SantriProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SantriProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SantriProfiles
     * const santriProfiles = await prisma.santriProfile.findMany()
     * 
     * // Get first 10 SantriProfiles
     * const santriProfiles = await prisma.santriProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const santriProfileWithIdOnly = await prisma.santriProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SantriProfileFindManyArgs>(args?: SelectSubset<T, SantriProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SantriProfile.
     * @param {SantriProfileCreateArgs} args - Arguments to create a SantriProfile.
     * @example
     * // Create one SantriProfile
     * const SantriProfile = await prisma.santriProfile.create({
     *   data: {
     *     // ... data to create a SantriProfile
     *   }
     * })
     * 
     */
    create<T extends SantriProfileCreateArgs>(args: SelectSubset<T, SantriProfileCreateArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SantriProfiles.
     * @param {SantriProfileCreateManyArgs} args - Arguments to create many SantriProfiles.
     * @example
     * // Create many SantriProfiles
     * const santriProfile = await prisma.santriProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SantriProfileCreateManyArgs>(args?: SelectSubset<T, SantriProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SantriProfiles and returns the data saved in the database.
     * @param {SantriProfileCreateManyAndReturnArgs} args - Arguments to create many SantriProfiles.
     * @example
     * // Create many SantriProfiles
     * const santriProfile = await prisma.santriProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SantriProfiles and only return the `id`
     * const santriProfileWithIdOnly = await prisma.santriProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SantriProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, SantriProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SantriProfile.
     * @param {SantriProfileDeleteArgs} args - Arguments to delete one SantriProfile.
     * @example
     * // Delete one SantriProfile
     * const SantriProfile = await prisma.santriProfile.delete({
     *   where: {
     *     // ... filter to delete one SantriProfile
     *   }
     * })
     * 
     */
    delete<T extends SantriProfileDeleteArgs>(args: SelectSubset<T, SantriProfileDeleteArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SantriProfile.
     * @param {SantriProfileUpdateArgs} args - Arguments to update one SantriProfile.
     * @example
     * // Update one SantriProfile
     * const santriProfile = await prisma.santriProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SantriProfileUpdateArgs>(args: SelectSubset<T, SantriProfileUpdateArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SantriProfiles.
     * @param {SantriProfileDeleteManyArgs} args - Arguments to filter SantriProfiles to delete.
     * @example
     * // Delete a few SantriProfiles
     * const { count } = await prisma.santriProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SantriProfileDeleteManyArgs>(args?: SelectSubset<T, SantriProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SantriProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SantriProfiles
     * const santriProfile = await prisma.santriProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SantriProfileUpdateManyArgs>(args: SelectSubset<T, SantriProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SantriProfiles and returns the data updated in the database.
     * @param {SantriProfileUpdateManyAndReturnArgs} args - Arguments to update many SantriProfiles.
     * @example
     * // Update many SantriProfiles
     * const santriProfile = await prisma.santriProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SantriProfiles and only return the `id`
     * const santriProfileWithIdOnly = await prisma.santriProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SantriProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, SantriProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SantriProfile.
     * @param {SantriProfileUpsertArgs} args - Arguments to update or create a SantriProfile.
     * @example
     * // Update or create a SantriProfile
     * const santriProfile = await prisma.santriProfile.upsert({
     *   create: {
     *     // ... data to create a SantriProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SantriProfile we want to update
     *   }
     * })
     */
    upsert<T extends SantriProfileUpsertArgs>(args: SelectSubset<T, SantriProfileUpsertArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SantriProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriProfileCountArgs} args - Arguments to filter SantriProfiles to count.
     * @example
     * // Count the number of SantriProfiles
     * const count = await prisma.santriProfile.count({
     *   where: {
     *     // ... the filter for the SantriProfiles we want to count
     *   }
     * })
    **/
    count<T extends SantriProfileCountArgs>(
      args?: Subset<T, SantriProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SantriProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SantriProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SantriProfileAggregateArgs>(args: Subset<T, SantriProfileAggregateArgs>): Prisma.PrismaPromise<GetSantriProfileAggregateType<T>>

    /**
     * Group by SantriProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriProfileGroupByArgs} args - Group by arguments.
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
      T extends SantriProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SantriProfileGroupByArgs['orderBy'] }
        : { orderBy?: SantriProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SantriProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSantriProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SantriProfile model
   */
  readonly fields: SantriProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SantriProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SantriProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends SantriProfile$classArgs<ExtArgs> = {}>(args?: Subset<T, SantriProfile$classArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SantriProfile model
   */
  interface SantriProfileFieldRefs {
    readonly id: FieldRef<"SantriProfile", 'String'>
    readonly userId: FieldRef<"SantriProfile", 'String'>
    readonly gender: FieldRef<"SantriProfile", 'Gender'>
    readonly phone: FieldRef<"SantriProfile", 'String'>
    readonly birthDate: FieldRef<"SantriProfile", 'DateTime'>
    readonly address: FieldRef<"SantriProfile", 'String'>
    readonly photoUrl: FieldRef<"SantriProfile", 'String'>
    readonly classId: FieldRef<"SantriProfile", 'String'>
    readonly createdAt: FieldRef<"SantriProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"SantriProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SantriProfile findUnique
   */
  export type SantriProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * Filter, which SantriProfile to fetch.
     */
    where: SantriProfileWhereUniqueInput
  }

  /**
   * SantriProfile findUniqueOrThrow
   */
  export type SantriProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * Filter, which SantriProfile to fetch.
     */
    where: SantriProfileWhereUniqueInput
  }

  /**
   * SantriProfile findFirst
   */
  export type SantriProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * Filter, which SantriProfile to fetch.
     */
    where?: SantriProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SantriProfiles to fetch.
     */
    orderBy?: SantriProfileOrderByWithRelationInput | SantriProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SantriProfiles.
     */
    cursor?: SantriProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SantriProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SantriProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SantriProfiles.
     */
    distinct?: SantriProfileScalarFieldEnum | SantriProfileScalarFieldEnum[]
  }

  /**
   * SantriProfile findFirstOrThrow
   */
  export type SantriProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * Filter, which SantriProfile to fetch.
     */
    where?: SantriProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SantriProfiles to fetch.
     */
    orderBy?: SantriProfileOrderByWithRelationInput | SantriProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SantriProfiles.
     */
    cursor?: SantriProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SantriProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SantriProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SantriProfiles.
     */
    distinct?: SantriProfileScalarFieldEnum | SantriProfileScalarFieldEnum[]
  }

  /**
   * SantriProfile findMany
   */
  export type SantriProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * Filter, which SantriProfiles to fetch.
     */
    where?: SantriProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SantriProfiles to fetch.
     */
    orderBy?: SantriProfileOrderByWithRelationInput | SantriProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SantriProfiles.
     */
    cursor?: SantriProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SantriProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SantriProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SantriProfiles.
     */
    distinct?: SantriProfileScalarFieldEnum | SantriProfileScalarFieldEnum[]
  }

  /**
   * SantriProfile create
   */
  export type SantriProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a SantriProfile.
     */
    data: XOR<SantriProfileCreateInput, SantriProfileUncheckedCreateInput>
  }

  /**
   * SantriProfile createMany
   */
  export type SantriProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SantriProfiles.
     */
    data: SantriProfileCreateManyInput | SantriProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SantriProfile createManyAndReturn
   */
  export type SantriProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * The data used to create many SantriProfiles.
     */
    data: SantriProfileCreateManyInput | SantriProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SantriProfile update
   */
  export type SantriProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a SantriProfile.
     */
    data: XOR<SantriProfileUpdateInput, SantriProfileUncheckedUpdateInput>
    /**
     * Choose, which SantriProfile to update.
     */
    where: SantriProfileWhereUniqueInput
  }

  /**
   * SantriProfile updateMany
   */
  export type SantriProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SantriProfiles.
     */
    data: XOR<SantriProfileUpdateManyMutationInput, SantriProfileUncheckedUpdateManyInput>
    /**
     * Filter which SantriProfiles to update
     */
    where?: SantriProfileWhereInput
    /**
     * Limit how many SantriProfiles to update.
     */
    limit?: number
  }

  /**
   * SantriProfile updateManyAndReturn
   */
  export type SantriProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * The data used to update SantriProfiles.
     */
    data: XOR<SantriProfileUpdateManyMutationInput, SantriProfileUncheckedUpdateManyInput>
    /**
     * Filter which SantriProfiles to update
     */
    where?: SantriProfileWhereInput
    /**
     * Limit how many SantriProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SantriProfile upsert
   */
  export type SantriProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the SantriProfile to update in case it exists.
     */
    where: SantriProfileWhereUniqueInput
    /**
     * In case the SantriProfile found by the `where` argument doesn't exist, create a new SantriProfile with this data.
     */
    create: XOR<SantriProfileCreateInput, SantriProfileUncheckedCreateInput>
    /**
     * In case the SantriProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SantriProfileUpdateInput, SantriProfileUncheckedUpdateInput>
  }

  /**
   * SantriProfile delete
   */
  export type SantriProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * Filter which SantriProfile to delete.
     */
    where: SantriProfileWhereUniqueInput
  }

  /**
   * SantriProfile deleteMany
   */
  export type SantriProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SantriProfiles to delete
     */
    where?: SantriProfileWhereInput
    /**
     * Limit how many SantriProfiles to delete.
     */
    limit?: number
  }

  /**
   * SantriProfile.class
   */
  export type SantriProfile$classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
  }

  /**
   * SantriProfile without action
   */
  export type SantriProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nis: string | null
    fullName: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nis: string | null
    fullName: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nis: number
    fullName: number
    email: number
    password: number
    phone: number
    role: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nis?: true
    fullName?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    isActive?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nis?: true
    fullName?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    isActive?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nis?: true
    fullName?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nis: string | null
    fullName: string
    email: string
    password: string
    phone: string | null
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nis?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    waliProfile?: boolean | User$waliProfileArgs<ExtArgs>
    verifications?: boolean | User$verificationsArgs<ExtArgs>
    santriProfile?: boolean | User$santriProfileArgs<ExtArgs>
    mentorClasses?: boolean | User$mentorClassesArgs<ExtArgs>
    mentorAttendances?: boolean | User$mentorAttendancesArgs<ExtArgs>
    santriAttendances?: boolean | User$santriAttendancesArgs<ExtArgs>
    mentorAssignments?: boolean | User$mentorAssignmentsArgs<ExtArgs>
    santriSubmissions?: boolean | User$santriSubmissionsArgs<ExtArgs>
    waliRelations?: boolean | User$waliRelationsArgs<ExtArgs>
    santriRelations?: boolean | User$santriRelationsArgs<ExtArgs>
    dailyJournals?: boolean | User$dailyJournalsArgs<ExtArgs>
    mentorDailyJournals?: boolean | User$mentorDailyJournalsArgs<ExtArgs>
    monthlyEvaluations?: boolean | User$monthlyEvaluationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nis?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nis?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nis?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nis" | "fullName" | "email" | "password" | "phone" | "role" | "isActive" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waliProfile?: boolean | User$waliProfileArgs<ExtArgs>
    verifications?: boolean | User$verificationsArgs<ExtArgs>
    santriProfile?: boolean | User$santriProfileArgs<ExtArgs>
    mentorClasses?: boolean | User$mentorClassesArgs<ExtArgs>
    mentorAttendances?: boolean | User$mentorAttendancesArgs<ExtArgs>
    santriAttendances?: boolean | User$santriAttendancesArgs<ExtArgs>
    mentorAssignments?: boolean | User$mentorAssignmentsArgs<ExtArgs>
    santriSubmissions?: boolean | User$santriSubmissionsArgs<ExtArgs>
    waliRelations?: boolean | User$waliRelationsArgs<ExtArgs>
    santriRelations?: boolean | User$santriRelationsArgs<ExtArgs>
    dailyJournals?: boolean | User$dailyJournalsArgs<ExtArgs>
    mentorDailyJournals?: boolean | User$mentorDailyJournalsArgs<ExtArgs>
    monthlyEvaluations?: boolean | User$monthlyEvaluationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      waliProfile: Prisma.$WaliProfilePayload<ExtArgs> | null
      verifications: Prisma.$VerificationPayload<ExtArgs>[]
      santriProfile: Prisma.$SantriProfilePayload<ExtArgs> | null
      mentorClasses: Prisma.$ClassPayload<ExtArgs>[]
      mentorAttendances: Prisma.$AttendancePayload<ExtArgs>[]
      santriAttendances: Prisma.$AttendancePayload<ExtArgs>[]
      mentorAssignments: Prisma.$AssignmentPayload<ExtArgs>[]
      santriSubmissions: Prisma.$AssignmentContentPayload<ExtArgs>[]
      waliRelations: Prisma.$WaliSantriRelationPayload<ExtArgs>[]
      santriRelations: Prisma.$WaliSantriRelationPayload<ExtArgs>[]
      dailyJournals: Prisma.$DailyJournalPayload<ExtArgs>[]
      mentorDailyJournals: Prisma.$DailyJournalPayload<ExtArgs>[]
      monthlyEvaluations: Prisma.$MonthlyEvaluationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nis: string | null
      fullName: string
      email: string
      password: string
      phone: string | null
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    waliProfile<T extends User$waliProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$waliProfileArgs<ExtArgs>>): Prisma__WaliProfileClient<$Result.GetResult<Prisma.$WaliProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    verifications<T extends User$verificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$verificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    santriProfile<T extends User$santriProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$santriProfileArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mentorClasses<T extends User$mentorClassesArgs<ExtArgs> = {}>(args?: Subset<T, User$mentorClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mentorAttendances<T extends User$mentorAttendancesArgs<ExtArgs> = {}>(args?: Subset<T, User$mentorAttendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    santriAttendances<T extends User$santriAttendancesArgs<ExtArgs> = {}>(args?: Subset<T, User$santriAttendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mentorAssignments<T extends User$mentorAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$mentorAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    santriSubmissions<T extends User$santriSubmissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$santriSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waliRelations<T extends User$waliRelationsArgs<ExtArgs> = {}>(args?: Subset<T, User$waliRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    santriRelations<T extends User$santriRelationsArgs<ExtArgs> = {}>(args?: Subset<T, User$santriRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyJournals<T extends User$dailyJournalsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyJournalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyJournalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mentorDailyJournals<T extends User$mentorDailyJournalsArgs<ExtArgs> = {}>(args?: Subset<T, User$mentorDailyJournalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyJournalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthlyEvaluations<T extends User$monthlyEvaluationsArgs<ExtArgs> = {}>(args?: Subset<T, User$monthlyEvaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nis: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.waliProfile
   */
  export type User$waliProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliProfile
     */
    select?: WaliProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliProfile
     */
    omit?: WaliProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliProfileInclude<ExtArgs> | null
    where?: WaliProfileWhereInput
  }

  /**
   * User.verifications
   */
  export type User$verificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    cursor?: VerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * User.santriProfile
   */
  export type User$santriProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    where?: SantriProfileWhereInput
  }

  /**
   * User.mentorClasses
   */
  export type User$mentorClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * User.mentorAttendances
   */
  export type User$mentorAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User.santriAttendances
   */
  export type User$santriAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User.mentorAssignments
   */
  export type User$mentorAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * User.santriSubmissions
   */
  export type User$santriSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    where?: AssignmentContentWhereInput
    orderBy?: AssignmentContentOrderByWithRelationInput | AssignmentContentOrderByWithRelationInput[]
    cursor?: AssignmentContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentContentScalarFieldEnum | AssignmentContentScalarFieldEnum[]
  }

  /**
   * User.waliRelations
   */
  export type User$waliRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    where?: WaliSantriRelationWhereInput
    orderBy?: WaliSantriRelationOrderByWithRelationInput | WaliSantriRelationOrderByWithRelationInput[]
    cursor?: WaliSantriRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaliSantriRelationScalarFieldEnum | WaliSantriRelationScalarFieldEnum[]
  }

  /**
   * User.santriRelations
   */
  export type User$santriRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    where?: WaliSantriRelationWhereInput
    orderBy?: WaliSantriRelationOrderByWithRelationInput | WaliSantriRelationOrderByWithRelationInput[]
    cursor?: WaliSantriRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaliSantriRelationScalarFieldEnum | WaliSantriRelationScalarFieldEnum[]
  }

  /**
   * User.dailyJournals
   */
  export type User$dailyJournalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyJournal
     */
    select?: DailyJournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyJournal
     */
    omit?: DailyJournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyJournalInclude<ExtArgs> | null
    where?: DailyJournalWhereInput
    orderBy?: DailyJournalOrderByWithRelationInput | DailyJournalOrderByWithRelationInput[]
    cursor?: DailyJournalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyJournalScalarFieldEnum | DailyJournalScalarFieldEnum[]
  }

  /**
   * User.mentorDailyJournals
   */
  export type User$mentorDailyJournalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyJournal
     */
    select?: DailyJournalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyJournal
     */
    omit?: DailyJournalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyJournalInclude<ExtArgs> | null
    where?: DailyJournalWhereInput
    orderBy?: DailyJournalOrderByWithRelationInput | DailyJournalOrderByWithRelationInput[]
    cursor?: DailyJournalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyJournalScalarFieldEnum | DailyJournalScalarFieldEnum[]
  }

  /**
   * User.monthlyEvaluations
   */
  export type User$monthlyEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEvaluation
     */
    select?: MonthlyEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEvaluation
     */
    omit?: MonthlyEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyEvaluationInclude<ExtArgs> | null
    where?: MonthlyEvaluationWhereInput
    orderBy?: MonthlyEvaluationOrderByWithRelationInput | MonthlyEvaluationOrderByWithRelationInput[]
    cursor?: MonthlyEvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyEvaluationScalarFieldEnum | MonthlyEvaluationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model WaliProfile
   */

  export type AggregateWaliProfile = {
    _count: WaliProfileCountAggregateOutputType | null
    _min: WaliProfileMinAggregateOutputType | null
    _max: WaliProfileMaxAggregateOutputType | null
  }

  export type WaliProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gender: $Enums.Gender | null
    phone: string | null
    address: string | null
    photoUrl: string | null
    job: string | null
  }

  export type WaliProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gender: $Enums.Gender | null
    phone: string | null
    address: string | null
    photoUrl: string | null
    job: string | null
  }

  export type WaliProfileCountAggregateOutputType = {
    id: number
    userId: number
    gender: number
    phone: number
    address: number
    photoUrl: number
    job: number
    _all: number
  }


  export type WaliProfileMinAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    phone?: true
    address?: true
    photoUrl?: true
    job?: true
  }

  export type WaliProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    phone?: true
    address?: true
    photoUrl?: true
    job?: true
  }

  export type WaliProfileCountAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    phone?: true
    address?: true
    photoUrl?: true
    job?: true
    _all?: true
  }

  export type WaliProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaliProfile to aggregate.
     */
    where?: WaliProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliProfiles to fetch.
     */
    orderBy?: WaliProfileOrderByWithRelationInput | WaliProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaliProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaliProfiles
    **/
    _count?: true | WaliProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaliProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaliProfileMaxAggregateInputType
  }

  export type GetWaliProfileAggregateType<T extends WaliProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateWaliProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaliProfile[P]>
      : GetScalarType<T[P], AggregateWaliProfile[P]>
  }




  export type WaliProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaliProfileWhereInput
    orderBy?: WaliProfileOrderByWithAggregationInput | WaliProfileOrderByWithAggregationInput[]
    by: WaliProfileScalarFieldEnum[] | WaliProfileScalarFieldEnum
    having?: WaliProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaliProfileCountAggregateInputType | true
    _min?: WaliProfileMinAggregateInputType
    _max?: WaliProfileMaxAggregateInputType
  }

  export type WaliProfileGroupByOutputType = {
    id: string
    userId: string
    gender: $Enums.Gender | null
    phone: string | null
    address: string | null
    photoUrl: string | null
    job: string | null
    _count: WaliProfileCountAggregateOutputType | null
    _min: WaliProfileMinAggregateOutputType | null
    _max: WaliProfileMaxAggregateOutputType | null
  }

  type GetWaliProfileGroupByPayload<T extends WaliProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaliProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaliProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaliProfileGroupByOutputType[P]>
            : GetScalarType<T[P], WaliProfileGroupByOutputType[P]>
        }
      >
    >


  export type WaliProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    phone?: boolean
    address?: boolean
    photoUrl?: boolean
    job?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waliProfile"]>

  export type WaliProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    phone?: boolean
    address?: boolean
    photoUrl?: boolean
    job?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waliProfile"]>

  export type WaliProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    phone?: boolean
    address?: boolean
    photoUrl?: boolean
    job?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waliProfile"]>

  export type WaliProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    gender?: boolean
    phone?: boolean
    address?: boolean
    photoUrl?: boolean
    job?: boolean
  }

  export type WaliProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gender" | "phone" | "address" | "photoUrl" | "job", ExtArgs["result"]["waliProfile"]>
  export type WaliProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WaliProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WaliProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WaliProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaliProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gender: $Enums.Gender | null
      phone: string | null
      address: string | null
      photoUrl: string | null
      job: string | null
    }, ExtArgs["result"]["waliProfile"]>
    composites: {}
  }

  type WaliProfileGetPayload<S extends boolean | null | undefined | WaliProfileDefaultArgs> = $Result.GetResult<Prisma.$WaliProfilePayload, S>

  type WaliProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaliProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaliProfileCountAggregateInputType | true
    }

  export interface WaliProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaliProfile'], meta: { name: 'WaliProfile' } }
    /**
     * Find zero or one WaliProfile that matches the filter.
     * @param {WaliProfileFindUniqueArgs} args - Arguments to find a WaliProfile
     * @example
     * // Get one WaliProfile
     * const waliProfile = await prisma.waliProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaliProfileFindUniqueArgs>(args: SelectSubset<T, WaliProfileFindUniqueArgs<ExtArgs>>): Prisma__WaliProfileClient<$Result.GetResult<Prisma.$WaliProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaliProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaliProfileFindUniqueOrThrowArgs} args - Arguments to find a WaliProfile
     * @example
     * // Get one WaliProfile
     * const waliProfile = await prisma.waliProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaliProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, WaliProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaliProfileClient<$Result.GetResult<Prisma.$WaliProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaliProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliProfileFindFirstArgs} args - Arguments to find a WaliProfile
     * @example
     * // Get one WaliProfile
     * const waliProfile = await prisma.waliProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaliProfileFindFirstArgs>(args?: SelectSubset<T, WaliProfileFindFirstArgs<ExtArgs>>): Prisma__WaliProfileClient<$Result.GetResult<Prisma.$WaliProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaliProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliProfileFindFirstOrThrowArgs} args - Arguments to find a WaliProfile
     * @example
     * // Get one WaliProfile
     * const waliProfile = await prisma.waliProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaliProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, WaliProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaliProfileClient<$Result.GetResult<Prisma.$WaliProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaliProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaliProfiles
     * const waliProfiles = await prisma.waliProfile.findMany()
     * 
     * // Get first 10 WaliProfiles
     * const waliProfiles = await prisma.waliProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waliProfileWithIdOnly = await prisma.waliProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaliProfileFindManyArgs>(args?: SelectSubset<T, WaliProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaliProfile.
     * @param {WaliProfileCreateArgs} args - Arguments to create a WaliProfile.
     * @example
     * // Create one WaliProfile
     * const WaliProfile = await prisma.waliProfile.create({
     *   data: {
     *     // ... data to create a WaliProfile
     *   }
     * })
     * 
     */
    create<T extends WaliProfileCreateArgs>(args: SelectSubset<T, WaliProfileCreateArgs<ExtArgs>>): Prisma__WaliProfileClient<$Result.GetResult<Prisma.$WaliProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaliProfiles.
     * @param {WaliProfileCreateManyArgs} args - Arguments to create many WaliProfiles.
     * @example
     * // Create many WaliProfiles
     * const waliProfile = await prisma.waliProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaliProfileCreateManyArgs>(args?: SelectSubset<T, WaliProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaliProfiles and returns the data saved in the database.
     * @param {WaliProfileCreateManyAndReturnArgs} args - Arguments to create many WaliProfiles.
     * @example
     * // Create many WaliProfiles
     * const waliProfile = await prisma.waliProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaliProfiles and only return the `id`
     * const waliProfileWithIdOnly = await prisma.waliProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaliProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, WaliProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaliProfile.
     * @param {WaliProfileDeleteArgs} args - Arguments to delete one WaliProfile.
     * @example
     * // Delete one WaliProfile
     * const WaliProfile = await prisma.waliProfile.delete({
     *   where: {
     *     // ... filter to delete one WaliProfile
     *   }
     * })
     * 
     */
    delete<T extends WaliProfileDeleteArgs>(args: SelectSubset<T, WaliProfileDeleteArgs<ExtArgs>>): Prisma__WaliProfileClient<$Result.GetResult<Prisma.$WaliProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaliProfile.
     * @param {WaliProfileUpdateArgs} args - Arguments to update one WaliProfile.
     * @example
     * // Update one WaliProfile
     * const waliProfile = await prisma.waliProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaliProfileUpdateArgs>(args: SelectSubset<T, WaliProfileUpdateArgs<ExtArgs>>): Prisma__WaliProfileClient<$Result.GetResult<Prisma.$WaliProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaliProfiles.
     * @param {WaliProfileDeleteManyArgs} args - Arguments to filter WaliProfiles to delete.
     * @example
     * // Delete a few WaliProfiles
     * const { count } = await prisma.waliProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaliProfileDeleteManyArgs>(args?: SelectSubset<T, WaliProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaliProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaliProfiles
     * const waliProfile = await prisma.waliProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaliProfileUpdateManyArgs>(args: SelectSubset<T, WaliProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaliProfiles and returns the data updated in the database.
     * @param {WaliProfileUpdateManyAndReturnArgs} args - Arguments to update many WaliProfiles.
     * @example
     * // Update many WaliProfiles
     * const waliProfile = await prisma.waliProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaliProfiles and only return the `id`
     * const waliProfileWithIdOnly = await prisma.waliProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WaliProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, WaliProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaliProfile.
     * @param {WaliProfileUpsertArgs} args - Arguments to update or create a WaliProfile.
     * @example
     * // Update or create a WaliProfile
     * const waliProfile = await prisma.waliProfile.upsert({
     *   create: {
     *     // ... data to create a WaliProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaliProfile we want to update
     *   }
     * })
     */
    upsert<T extends WaliProfileUpsertArgs>(args: SelectSubset<T, WaliProfileUpsertArgs<ExtArgs>>): Prisma__WaliProfileClient<$Result.GetResult<Prisma.$WaliProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaliProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliProfileCountArgs} args - Arguments to filter WaliProfiles to count.
     * @example
     * // Count the number of WaliProfiles
     * const count = await prisma.waliProfile.count({
     *   where: {
     *     // ... the filter for the WaliProfiles we want to count
     *   }
     * })
    **/
    count<T extends WaliProfileCountArgs>(
      args?: Subset<T, WaliProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaliProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaliProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaliProfileAggregateArgs>(args: Subset<T, WaliProfileAggregateArgs>): Prisma.PrismaPromise<GetWaliProfileAggregateType<T>>

    /**
     * Group by WaliProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliProfileGroupByArgs} args - Group by arguments.
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
      T extends WaliProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaliProfileGroupByArgs['orderBy'] }
        : { orderBy?: WaliProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaliProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaliProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaliProfile model
   */
  readonly fields: WaliProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaliProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaliProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WaliProfile model
   */
  interface WaliProfileFieldRefs {
    readonly id: FieldRef<"WaliProfile", 'String'>
    readonly userId: FieldRef<"WaliProfile", 'String'>
    readonly gender: FieldRef<"WaliProfile", 'Gender'>
    readonly phone: FieldRef<"WaliProfile", 'String'>
    readonly address: FieldRef<"WaliProfile", 'String'>
    readonly photoUrl: FieldRef<"WaliProfile", 'String'>
    readonly job: FieldRef<"WaliProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WaliProfile findUnique
   */
  export type WaliProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliProfile
     */
    select?: WaliProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliProfile
     */
    omit?: WaliProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliProfileInclude<ExtArgs> | null
    /**
     * Filter, which WaliProfile to fetch.
     */
    where: WaliProfileWhereUniqueInput
  }

  /**
   * WaliProfile findUniqueOrThrow
   */
  export type WaliProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliProfile
     */
    select?: WaliProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliProfile
     */
    omit?: WaliProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliProfileInclude<ExtArgs> | null
    /**
     * Filter, which WaliProfile to fetch.
     */
    where: WaliProfileWhereUniqueInput
  }

  /**
   * WaliProfile findFirst
   */
  export type WaliProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliProfile
     */
    select?: WaliProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliProfile
     */
    omit?: WaliProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliProfileInclude<ExtArgs> | null
    /**
     * Filter, which WaliProfile to fetch.
     */
    where?: WaliProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliProfiles to fetch.
     */
    orderBy?: WaliProfileOrderByWithRelationInput | WaliProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaliProfiles.
     */
    cursor?: WaliProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaliProfiles.
     */
    distinct?: WaliProfileScalarFieldEnum | WaliProfileScalarFieldEnum[]
  }

  /**
   * WaliProfile findFirstOrThrow
   */
  export type WaliProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliProfile
     */
    select?: WaliProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliProfile
     */
    omit?: WaliProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliProfileInclude<ExtArgs> | null
    /**
     * Filter, which WaliProfile to fetch.
     */
    where?: WaliProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliProfiles to fetch.
     */
    orderBy?: WaliProfileOrderByWithRelationInput | WaliProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaliProfiles.
     */
    cursor?: WaliProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaliProfiles.
     */
    distinct?: WaliProfileScalarFieldEnum | WaliProfileScalarFieldEnum[]
  }

  /**
   * WaliProfile findMany
   */
  export type WaliProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliProfile
     */
    select?: WaliProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliProfile
     */
    omit?: WaliProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliProfileInclude<ExtArgs> | null
    /**
     * Filter, which WaliProfiles to fetch.
     */
    where?: WaliProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliProfiles to fetch.
     */
    orderBy?: WaliProfileOrderByWithRelationInput | WaliProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaliProfiles.
     */
    cursor?: WaliProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaliProfiles.
     */
    distinct?: WaliProfileScalarFieldEnum | WaliProfileScalarFieldEnum[]
  }

  /**
   * WaliProfile create
   */
  export type WaliProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliProfile
     */
    select?: WaliProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliProfile
     */
    omit?: WaliProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a WaliProfile.
     */
    data: XOR<WaliProfileCreateInput, WaliProfileUncheckedCreateInput>
  }

  /**
   * WaliProfile createMany
   */
  export type WaliProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaliProfiles.
     */
    data: WaliProfileCreateManyInput | WaliProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaliProfile createManyAndReturn
   */
  export type WaliProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliProfile
     */
    select?: WaliProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaliProfile
     */
    omit?: WaliProfileOmit<ExtArgs> | null
    /**
     * The data used to create many WaliProfiles.
     */
    data: WaliProfileCreateManyInput | WaliProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaliProfile update
   */
  export type WaliProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliProfile
     */
    select?: WaliProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliProfile
     */
    omit?: WaliProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a WaliProfile.
     */
    data: XOR<WaliProfileUpdateInput, WaliProfileUncheckedUpdateInput>
    /**
     * Choose, which WaliProfile to update.
     */
    where: WaliProfileWhereUniqueInput
  }

  /**
   * WaliProfile updateMany
   */
  export type WaliProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaliProfiles.
     */
    data: XOR<WaliProfileUpdateManyMutationInput, WaliProfileUncheckedUpdateManyInput>
    /**
     * Filter which WaliProfiles to update
     */
    where?: WaliProfileWhereInput
    /**
     * Limit how many WaliProfiles to update.
     */
    limit?: number
  }

  /**
   * WaliProfile updateManyAndReturn
   */
  export type WaliProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliProfile
     */
    select?: WaliProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaliProfile
     */
    omit?: WaliProfileOmit<ExtArgs> | null
    /**
     * The data used to update WaliProfiles.
     */
    data: XOR<WaliProfileUpdateManyMutationInput, WaliProfileUncheckedUpdateManyInput>
    /**
     * Filter which WaliProfiles to update
     */
    where?: WaliProfileWhereInput
    /**
     * Limit how many WaliProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaliProfile upsert
   */
  export type WaliProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliProfile
     */
    select?: WaliProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliProfile
     */
    omit?: WaliProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the WaliProfile to update in case it exists.
     */
    where: WaliProfileWhereUniqueInput
    /**
     * In case the WaliProfile found by the `where` argument doesn't exist, create a new WaliProfile with this data.
     */
    create: XOR<WaliProfileCreateInput, WaliProfileUncheckedCreateInput>
    /**
     * In case the WaliProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaliProfileUpdateInput, WaliProfileUncheckedUpdateInput>
  }

  /**
   * WaliProfile delete
   */
  export type WaliProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliProfile
     */
    select?: WaliProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliProfile
     */
    omit?: WaliProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliProfileInclude<ExtArgs> | null
    /**
     * Filter which WaliProfile to delete.
     */
    where: WaliProfileWhereUniqueInput
  }

  /**
   * WaliProfile deleteMany
   */
  export type WaliProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaliProfiles to delete
     */
    where?: WaliProfileWhereInput
    /**
     * Limit how many WaliProfiles to delete.
     */
    limit?: number
  }

  /**
   * WaliProfile without action
   */
  export type WaliProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliProfile
     */
    select?: WaliProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliProfile
     */
    omit?: WaliProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliProfileInclude<ExtArgs> | null
  }


  /**
   * Model WaliSantriRelation
   */

  export type AggregateWaliSantriRelation = {
    _count: WaliSantriRelationCountAggregateOutputType | null
    _min: WaliSantriRelationMinAggregateOutputType | null
    _max: WaliSantriRelationMaxAggregateOutputType | null
  }

  export type WaliSantriRelationMinAggregateOutputType = {
    id: string | null
    waliId: string | null
    santriId: string | null
    category: $Enums.WaliSantriCategory | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaliSantriRelationMaxAggregateOutputType = {
    id: string | null
    waliId: string | null
    santriId: string | null
    category: $Enums.WaliSantriCategory | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaliSantriRelationCountAggregateOutputType = {
    id: number
    waliId: number
    santriId: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WaliSantriRelationMinAggregateInputType = {
    id?: true
    waliId?: true
    santriId?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaliSantriRelationMaxAggregateInputType = {
    id?: true
    waliId?: true
    santriId?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaliSantriRelationCountAggregateInputType = {
    id?: true
    waliId?: true
    santriId?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WaliSantriRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaliSantriRelation to aggregate.
     */
    where?: WaliSantriRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliSantriRelations to fetch.
     */
    orderBy?: WaliSantriRelationOrderByWithRelationInput | WaliSantriRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaliSantriRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliSantriRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliSantriRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaliSantriRelations
    **/
    _count?: true | WaliSantriRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaliSantriRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaliSantriRelationMaxAggregateInputType
  }

  export type GetWaliSantriRelationAggregateType<T extends WaliSantriRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateWaliSantriRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaliSantriRelation[P]>
      : GetScalarType<T[P], AggregateWaliSantriRelation[P]>
  }




  export type WaliSantriRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaliSantriRelationWhereInput
    orderBy?: WaliSantriRelationOrderByWithAggregationInput | WaliSantriRelationOrderByWithAggregationInput[]
    by: WaliSantriRelationScalarFieldEnum[] | WaliSantriRelationScalarFieldEnum
    having?: WaliSantriRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaliSantriRelationCountAggregateInputType | true
    _min?: WaliSantriRelationMinAggregateInputType
    _max?: WaliSantriRelationMaxAggregateInputType
  }

  export type WaliSantriRelationGroupByOutputType = {
    id: string
    waliId: string
    santriId: string
    category: $Enums.WaliSantriCategory
    createdAt: Date
    updatedAt: Date
    _count: WaliSantriRelationCountAggregateOutputType | null
    _min: WaliSantriRelationMinAggregateOutputType | null
    _max: WaliSantriRelationMaxAggregateOutputType | null
  }

  type GetWaliSantriRelationGroupByPayload<T extends WaliSantriRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaliSantriRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaliSantriRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaliSantriRelationGroupByOutputType[P]>
            : GetScalarType<T[P], WaliSantriRelationGroupByOutputType[P]>
        }
      >
    >


  export type WaliSantriRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waliId?: boolean
    santriId?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wali?: boolean | UserDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waliSantriRelation"]>

  export type WaliSantriRelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waliId?: boolean
    santriId?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wali?: boolean | UserDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waliSantriRelation"]>

  export type WaliSantriRelationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waliId?: boolean
    santriId?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wali?: boolean | UserDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waliSantriRelation"]>

  export type WaliSantriRelationSelectScalar = {
    id?: boolean
    waliId?: boolean
    santriId?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WaliSantriRelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "waliId" | "santriId" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["waliSantriRelation"]>
  export type WaliSantriRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wali?: boolean | UserDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WaliSantriRelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wali?: boolean | UserDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WaliSantriRelationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wali?: boolean | UserDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WaliSantriRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaliSantriRelation"
    objects: {
      wali: Prisma.$UserPayload<ExtArgs>
      santri: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      waliId: string
      santriId: string
      category: $Enums.WaliSantriCategory
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["waliSantriRelation"]>
    composites: {}
  }

  type WaliSantriRelationGetPayload<S extends boolean | null | undefined | WaliSantriRelationDefaultArgs> = $Result.GetResult<Prisma.$WaliSantriRelationPayload, S>

  type WaliSantriRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaliSantriRelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaliSantriRelationCountAggregateInputType | true
    }

  export interface WaliSantriRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaliSantriRelation'], meta: { name: 'WaliSantriRelation' } }
    /**
     * Find zero or one WaliSantriRelation that matches the filter.
     * @param {WaliSantriRelationFindUniqueArgs} args - Arguments to find a WaliSantriRelation
     * @example
     * // Get one WaliSantriRelation
     * const waliSantriRelation = await prisma.waliSantriRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaliSantriRelationFindUniqueArgs>(args: SelectSubset<T, WaliSantriRelationFindUniqueArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaliSantriRelation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaliSantriRelationFindUniqueOrThrowArgs} args - Arguments to find a WaliSantriRelation
     * @example
     * // Get one WaliSantriRelation
     * const waliSantriRelation = await prisma.waliSantriRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaliSantriRelationFindUniqueOrThrowArgs>(args: SelectSubset<T, WaliSantriRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaliSantriRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliSantriRelationFindFirstArgs} args - Arguments to find a WaliSantriRelation
     * @example
     * // Get one WaliSantriRelation
     * const waliSantriRelation = await prisma.waliSantriRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaliSantriRelationFindFirstArgs>(args?: SelectSubset<T, WaliSantriRelationFindFirstArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaliSantriRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliSantriRelationFindFirstOrThrowArgs} args - Arguments to find a WaliSantriRelation
     * @example
     * // Get one WaliSantriRelation
     * const waliSantriRelation = await prisma.waliSantriRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaliSantriRelationFindFirstOrThrowArgs>(args?: SelectSubset<T, WaliSantriRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaliSantriRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliSantriRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaliSantriRelations
     * const waliSantriRelations = await prisma.waliSantriRelation.findMany()
     * 
     * // Get first 10 WaliSantriRelations
     * const waliSantriRelations = await prisma.waliSantriRelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waliSantriRelationWithIdOnly = await prisma.waliSantriRelation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaliSantriRelationFindManyArgs>(args?: SelectSubset<T, WaliSantriRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaliSantriRelation.
     * @param {WaliSantriRelationCreateArgs} args - Arguments to create a WaliSantriRelation.
     * @example
     * // Create one WaliSantriRelation
     * const WaliSantriRelation = await prisma.waliSantriRelation.create({
     *   data: {
     *     // ... data to create a WaliSantriRelation
     *   }
     * })
     * 
     */
    create<T extends WaliSantriRelationCreateArgs>(args: SelectSubset<T, WaliSantriRelationCreateArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaliSantriRelations.
     * @param {WaliSantriRelationCreateManyArgs} args - Arguments to create many WaliSantriRelations.
     * @example
     * // Create many WaliSantriRelations
     * const waliSantriRelation = await prisma.waliSantriRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaliSantriRelationCreateManyArgs>(args?: SelectSubset<T, WaliSantriRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaliSantriRelations and returns the data saved in the database.
     * @param {WaliSantriRelationCreateManyAndReturnArgs} args - Arguments to create many WaliSantriRelations.
     * @example
     * // Create many WaliSantriRelations
     * const waliSantriRelation = await prisma.waliSantriRelation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaliSantriRelations and only return the `id`
     * const waliSantriRelationWithIdOnly = await prisma.waliSantriRelation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaliSantriRelationCreateManyAndReturnArgs>(args?: SelectSubset<T, WaliSantriRelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaliSantriRelation.
     * @param {WaliSantriRelationDeleteArgs} args - Arguments to delete one WaliSantriRelation.
     * @example
     * // Delete one WaliSantriRelation
     * const WaliSantriRelation = await prisma.waliSantriRelation.delete({
     *   where: {
     *     // ... filter to delete one WaliSantriRelation
     *   }
     * })
     * 
     */
    delete<T extends WaliSantriRelationDeleteArgs>(args: SelectSubset<T, WaliSantriRelationDeleteArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaliSantriRelation.
     * @param {WaliSantriRelationUpdateArgs} args - Arguments to update one WaliSantriRelation.
     * @example
     * // Update one WaliSantriRelation
     * const waliSantriRelation = await prisma.waliSantriRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaliSantriRelationUpdateArgs>(args: SelectSubset<T, WaliSantriRelationUpdateArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaliSantriRelations.
     * @param {WaliSantriRelationDeleteManyArgs} args - Arguments to filter WaliSantriRelations to delete.
     * @example
     * // Delete a few WaliSantriRelations
     * const { count } = await prisma.waliSantriRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaliSantriRelationDeleteManyArgs>(args?: SelectSubset<T, WaliSantriRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaliSantriRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliSantriRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaliSantriRelations
     * const waliSantriRelation = await prisma.waliSantriRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaliSantriRelationUpdateManyArgs>(args: SelectSubset<T, WaliSantriRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaliSantriRelations and returns the data updated in the database.
     * @param {WaliSantriRelationUpdateManyAndReturnArgs} args - Arguments to update many WaliSantriRelations.
     * @example
     * // Update many WaliSantriRelations
     * const waliSantriRelation = await prisma.waliSantriRelation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaliSantriRelations and only return the `id`
     * const waliSantriRelationWithIdOnly = await prisma.waliSantriRelation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WaliSantriRelationUpdateManyAndReturnArgs>(args: SelectSubset<T, WaliSantriRelationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaliSantriRelation.
     * @param {WaliSantriRelationUpsertArgs} args - Arguments to update or create a WaliSantriRelation.
     * @example
     * // Update or create a WaliSantriRelation
     * const waliSantriRelation = await prisma.waliSantriRelation.upsert({
     *   create: {
     *     // ... data to create a WaliSantriRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaliSantriRelation we want to update
     *   }
     * })
     */
    upsert<T extends WaliSantriRelationUpsertArgs>(args: SelectSubset<T, WaliSantriRelationUpsertArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaliSantriRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliSantriRelationCountArgs} args - Arguments to filter WaliSantriRelations to count.
     * @example
     * // Count the number of WaliSantriRelations
     * const count = await prisma.waliSantriRelation.count({
     *   where: {
     *     // ... the filter for the WaliSantriRelations we want to count
     *   }
     * })
    **/
    count<T extends WaliSantriRelationCountArgs>(
      args?: Subset<T, WaliSantriRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaliSantriRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaliSantriRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliSantriRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaliSantriRelationAggregateArgs>(args: Subset<T, WaliSantriRelationAggregateArgs>): Prisma.PrismaPromise<GetWaliSantriRelationAggregateType<T>>

    /**
     * Group by WaliSantriRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliSantriRelationGroupByArgs} args - Group by arguments.
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
      T extends WaliSantriRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaliSantriRelationGroupByArgs['orderBy'] }
        : { orderBy?: WaliSantriRelationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaliSantriRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaliSantriRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaliSantriRelation model
   */
  readonly fields: WaliSantriRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaliSantriRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaliSantriRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wali<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    santri<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WaliSantriRelation model
   */
  interface WaliSantriRelationFieldRefs {
    readonly id: FieldRef<"WaliSantriRelation", 'String'>
    readonly waliId: FieldRef<"WaliSantriRelation", 'String'>
    readonly santriId: FieldRef<"WaliSantriRelation", 'String'>
    readonly category: FieldRef<"WaliSantriRelation", 'WaliSantriCategory'>
    readonly createdAt: FieldRef<"WaliSantriRelation", 'DateTime'>
    readonly updatedAt: FieldRef<"WaliSantriRelation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WaliSantriRelation findUnique
   */
  export type WaliSantriRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * Filter, which WaliSantriRelation to fetch.
     */
    where: WaliSantriRelationWhereUniqueInput
  }

  /**
   * WaliSantriRelation findUniqueOrThrow
   */
  export type WaliSantriRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * Filter, which WaliSantriRelation to fetch.
     */
    where: WaliSantriRelationWhereUniqueInput
  }

  /**
   * WaliSantriRelation findFirst
   */
  export type WaliSantriRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * Filter, which WaliSantriRelation to fetch.
     */
    where?: WaliSantriRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliSantriRelations to fetch.
     */
    orderBy?: WaliSantriRelationOrderByWithRelationInput | WaliSantriRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaliSantriRelations.
     */
    cursor?: WaliSantriRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliSantriRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliSantriRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaliSantriRelations.
     */
    distinct?: WaliSantriRelationScalarFieldEnum | WaliSantriRelationScalarFieldEnum[]
  }

  /**
   * WaliSantriRelation findFirstOrThrow
   */
  export type WaliSantriRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * Filter, which WaliSantriRelation to fetch.
     */
    where?: WaliSantriRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliSantriRelations to fetch.
     */
    orderBy?: WaliSantriRelationOrderByWithRelationInput | WaliSantriRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaliSantriRelations.
     */
    cursor?: WaliSantriRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliSantriRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliSantriRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaliSantriRelations.
     */
    distinct?: WaliSantriRelationScalarFieldEnum | WaliSantriRelationScalarFieldEnum[]
  }

  /**
   * WaliSantriRelation findMany
   */
  export type WaliSantriRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * Filter, which WaliSantriRelations to fetch.
     */
    where?: WaliSantriRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliSantriRelations to fetch.
     */
    orderBy?: WaliSantriRelationOrderByWithRelationInput | WaliSantriRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaliSantriRelations.
     */
    cursor?: WaliSantriRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliSantriRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliSantriRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaliSantriRelations.
     */
    distinct?: WaliSantriRelationScalarFieldEnum | WaliSantriRelationScalarFieldEnum[]
  }

  /**
   * WaliSantriRelation create
   */
  export type WaliSantriRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a WaliSantriRelation.
     */
    data: XOR<WaliSantriRelationCreateInput, WaliSantriRelationUncheckedCreateInput>
  }

  /**
   * WaliSantriRelation createMany
   */
  export type WaliSantriRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaliSantriRelations.
     */
    data: WaliSantriRelationCreateManyInput | WaliSantriRelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaliSantriRelation createManyAndReturn
   */
  export type WaliSantriRelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * The data used to create many WaliSantriRelations.
     */
    data: WaliSantriRelationCreateManyInput | WaliSantriRelationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaliSantriRelation update
   */
  export type WaliSantriRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a WaliSantriRelation.
     */
    data: XOR<WaliSantriRelationUpdateInput, WaliSantriRelationUncheckedUpdateInput>
    /**
     * Choose, which WaliSantriRelation to update.
     */
    where: WaliSantriRelationWhereUniqueInput
  }

  /**
   * WaliSantriRelation updateMany
   */
  export type WaliSantriRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaliSantriRelations.
     */
    data: XOR<WaliSantriRelationUpdateManyMutationInput, WaliSantriRelationUncheckedUpdateManyInput>
    /**
     * Filter which WaliSantriRelations to update
     */
    where?: WaliSantriRelationWhereInput
    /**
     * Limit how many WaliSantriRelations to update.
     */
    limit?: number
  }

  /**
   * WaliSantriRelation updateManyAndReturn
   */
  export type WaliSantriRelationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * The data used to update WaliSantriRelations.
     */
    data: XOR<WaliSantriRelationUpdateManyMutationInput, WaliSantriRelationUncheckedUpdateManyInput>
    /**
     * Filter which WaliSantriRelations to update
     */
    where?: WaliSantriRelationWhereInput
    /**
     * Limit how many WaliSantriRelations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaliSantriRelation upsert
   */
  export type WaliSantriRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the WaliSantriRelation to update in case it exists.
     */
    where: WaliSantriRelationWhereUniqueInput
    /**
     * In case the WaliSantriRelation found by the `where` argument doesn't exist, create a new WaliSantriRelation with this data.
     */
    create: XOR<WaliSantriRelationCreateInput, WaliSantriRelationUncheckedCreateInput>
    /**
     * In case the WaliSantriRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaliSantriRelationUpdateInput, WaliSantriRelationUncheckedUpdateInput>
  }

  /**
   * WaliSantriRelation delete
   */
  export type WaliSantriRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * Filter which WaliSantriRelation to delete.
     */
    where: WaliSantriRelationWhereUniqueInput
  }

  /**
   * WaliSantriRelation deleteMany
   */
  export type WaliSantriRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaliSantriRelations to delete
     */
    where?: WaliSantriRelationWhereInput
    /**
     * Limit how many WaliSantriRelations to delete.
     */
    limit?: number
  }

  /**
   * WaliSantriRelation without action
   */
  export type WaliSantriRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
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


  export const VerificationScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    otpCode: 'otpCode',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    mentorId: 'mentorId',
    title: 'title',
    description: 'description',
    submissionType: 'submissionType',
    attachmentUrl: 'attachmentUrl',
    due_date: 'due_date',
    createdAt: 'createdAt'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const AssignmentContentScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    santriId: 'santriId',
    contentType: 'contentType',
    fileUrl: 'fileUrl',
    score: 'score',
    mentorFeedback: 'mentorFeedback',
    status: 'status',
    submittedAt: 'submittedAt'
  };

  export type AssignmentContentScalarFieldEnum = (typeof AssignmentContentScalarFieldEnum)[keyof typeof AssignmentContentScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    santriId: 'santriId',
    mentorId: 'mentorId',
    date: 'date',
    status: 'status',
    notes: 'notes',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    divisiId: 'divisiId',
    name: 'name',
    mentorId: 'mentorId',
    createdAt: 'createdAt'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const DailyJournalScalarFieldEnum: {
    id: 'id',
    santriId: 'santriId',
    classId: 'classId',
    mentorId: 'mentorId',
    attitudeScore: 'attitudeScore',
    notes: 'notes',
    date: 'date',
    description: 'description',
    tugasType: 'tugasType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailyJournalScalarFieldEnum = (typeof DailyJournalScalarFieldEnum)[keyof typeof DailyJournalScalarFieldEnum]


  export const DivisionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type DivisionScalarFieldEnum = (typeof DivisionScalarFieldEnum)[keyof typeof DivisionScalarFieldEnum]


  export const MonthlyEvaluationScalarFieldEnum: {
    id: 'id',
    santriId: 'santriId',
    classId: 'classId',
    month: 'month',
    year: 'year',
    taskAvg: 'taskAvg',
    attendancePoin: 'attendancePoin',
    maxAttendPoin: 'maxAttendPoin',
    attitudeAvg: 'attitudeAvg',
    taskScore: 'taskScore',
    attendanceScore: 'attendanceScore',
    attitudeScore: 'attitudeScore',
    finalScore: 'finalScore',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MonthlyEvaluationScalarFieldEnum = (typeof MonthlyEvaluationScalarFieldEnum)[keyof typeof MonthlyEvaluationScalarFieldEnum]


  export const SantriProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gender: 'gender',
    phone: 'phone',
    birthDate: 'birthDate',
    address: 'address',
    photoUrl: 'photoUrl',
    classId: 'classId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SantriProfileScalarFieldEnum = (typeof SantriProfileScalarFieldEnum)[keyof typeof SantriProfileScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    nis: 'nis',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WaliProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gender: 'gender',
    phone: 'phone',
    address: 'address',
    photoUrl: 'photoUrl',
    job: 'job'
  };

  export type WaliProfileScalarFieldEnum = (typeof WaliProfileScalarFieldEnum)[keyof typeof WaliProfileScalarFieldEnum]


  export const WaliSantriRelationScalarFieldEnum: {
    id: 'id',
    waliId: 'waliId',
    santriId: 'santriId',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WaliSantriRelationScalarFieldEnum = (typeof WaliSantriRelationScalarFieldEnum)[keyof typeof WaliSantriRelationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SubmissionType'
   */
  export type EnumSubmissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionType'>
    


  /**
   * Reference to a field of type 'SubmissionType[]'
   */
  export type ListEnumSubmissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionType[]'>
    


  /**
   * Reference to a field of type 'ContentType'
   */
  export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>
    


  /**
   * Reference to a field of type 'ContentType[]'
   */
  export type ListEnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'GradingStatus'
   */
  export type EnumGradingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GradingStatus'>
    


  /**
   * Reference to a field of type 'GradingStatus[]'
   */
  export type ListEnumGradingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GradingStatus[]'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TugasType'
   */
  export type EnumTugasTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TugasType'>
    


  /**
   * Reference to a field of type 'TugasType[]'
   */
  export type ListEnumTugasTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TugasType[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'WaliSantriCategory'
   */
  export type EnumWaliSantriCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WaliSantriCategory'>
    


  /**
   * Reference to a field of type 'WaliSantriCategory[]'
   */
  export type ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WaliSantriCategory[]'>
    
  /**
   * Deep Input Types
   */


  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    user_id?: StringFilter<"Verification"> | string
    otpCode?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    otpCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_otpCode?: VerificationUser_idOtpCodeCompoundUniqueInput
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    user_id?: StringFilter<"Verification"> | string
    otpCode?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id_otpCode">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    otpCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    user_id?: StringWithAggregatesFilter<"Verification"> | string
    otpCode?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: StringFilter<"Assignment"> | string
    classId?: StringFilter<"Assignment"> | string
    mentorId?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringNullableFilter<"Assignment"> | string | null
    submissionType?: EnumSubmissionTypeFilter<"Assignment"> | $Enums.SubmissionType
    attachmentUrl?: StringNullableFilter<"Assignment"> | string | null
    due_date?: DateTimeFilter<"Assignment"> | Date | string
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: AssignmentContentListRelationFilter
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    submissionType?: SortOrder
    attachmentUrl?: SortOrderInput | SortOrder
    due_date?: SortOrder
    createdAt?: SortOrder
    class?: ClassOrderByWithRelationInput
    mentor?: UserOrderByWithRelationInput
    submissions?: AssignmentContentOrderByRelationAggregateInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    classId?: StringFilter<"Assignment"> | string
    mentorId?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringNullableFilter<"Assignment"> | string | null
    submissionType?: EnumSubmissionTypeFilter<"Assignment"> | $Enums.SubmissionType
    attachmentUrl?: StringNullableFilter<"Assignment"> | string | null
    due_date?: DateTimeFilter<"Assignment"> | Date | string
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: AssignmentContentListRelationFilter
  }, "id">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    submissionType?: SortOrder
    attachmentUrl?: SortOrderInput | SortOrder
    due_date?: SortOrder
    createdAt?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assignment"> | string
    classId?: StringWithAggregatesFilter<"Assignment"> | string
    mentorId?: StringWithAggregatesFilter<"Assignment"> | string
    title?: StringWithAggregatesFilter<"Assignment"> | string
    description?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    submissionType?: EnumSubmissionTypeWithAggregatesFilter<"Assignment"> | $Enums.SubmissionType
    attachmentUrl?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    due_date?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
  }

  export type AssignmentContentWhereInput = {
    AND?: AssignmentContentWhereInput | AssignmentContentWhereInput[]
    OR?: AssignmentContentWhereInput[]
    NOT?: AssignmentContentWhereInput | AssignmentContentWhereInput[]
    id?: StringFilter<"AssignmentContent"> | string
    assignmentId?: StringFilter<"AssignmentContent"> | string
    santriId?: StringFilter<"AssignmentContent"> | string
    contentType?: EnumContentTypeFilter<"AssignmentContent"> | $Enums.ContentType
    fileUrl?: StringNullableListFilter<"AssignmentContent">
    score?: IntNullableFilter<"AssignmentContent"> | number | null
    mentorFeedback?: StringNullableFilter<"AssignmentContent"> | string | null
    status?: EnumGradingStatusFilter<"AssignmentContent"> | $Enums.GradingStatus
    submittedAt?: DateTimeFilter<"AssignmentContent"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AssignmentContentOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    santriId?: SortOrder
    contentType?: SortOrder
    fileUrl?: SortOrder
    score?: SortOrderInput | SortOrder
    mentorFeedback?: SortOrderInput | SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    santri?: UserOrderByWithRelationInput
  }

  export type AssignmentContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    assignmentId_santriId?: AssignmentContentAssignmentIdSantriIdCompoundUniqueInput
    AND?: AssignmentContentWhereInput | AssignmentContentWhereInput[]
    OR?: AssignmentContentWhereInput[]
    NOT?: AssignmentContentWhereInput | AssignmentContentWhereInput[]
    assignmentId?: StringFilter<"AssignmentContent"> | string
    santriId?: StringFilter<"AssignmentContent"> | string
    contentType?: EnumContentTypeFilter<"AssignmentContent"> | $Enums.ContentType
    fileUrl?: StringNullableListFilter<"AssignmentContent">
    score?: IntNullableFilter<"AssignmentContent"> | number | null
    mentorFeedback?: StringNullableFilter<"AssignmentContent"> | string | null
    status?: EnumGradingStatusFilter<"AssignmentContent"> | $Enums.GradingStatus
    submittedAt?: DateTimeFilter<"AssignmentContent"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "assignmentId_santriId">

  export type AssignmentContentOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    santriId?: SortOrder
    contentType?: SortOrder
    fileUrl?: SortOrder
    score?: SortOrderInput | SortOrder
    mentorFeedback?: SortOrderInput | SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    _count?: AssignmentContentCountOrderByAggregateInput
    _avg?: AssignmentContentAvgOrderByAggregateInput
    _max?: AssignmentContentMaxOrderByAggregateInput
    _min?: AssignmentContentMinOrderByAggregateInput
    _sum?: AssignmentContentSumOrderByAggregateInput
  }

  export type AssignmentContentScalarWhereWithAggregatesInput = {
    AND?: AssignmentContentScalarWhereWithAggregatesInput | AssignmentContentScalarWhereWithAggregatesInput[]
    OR?: AssignmentContentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentContentScalarWhereWithAggregatesInput | AssignmentContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssignmentContent"> | string
    assignmentId?: StringWithAggregatesFilter<"AssignmentContent"> | string
    santriId?: StringWithAggregatesFilter<"AssignmentContent"> | string
    contentType?: EnumContentTypeWithAggregatesFilter<"AssignmentContent"> | $Enums.ContentType
    fileUrl?: StringNullableListFilter<"AssignmentContent">
    score?: IntNullableWithAggregatesFilter<"AssignmentContent"> | number | null
    mentorFeedback?: StringNullableWithAggregatesFilter<"AssignmentContent"> | string | null
    status?: EnumGradingStatusWithAggregatesFilter<"AssignmentContent"> | $Enums.GradingStatus
    submittedAt?: DateTimeWithAggregatesFilter<"AssignmentContent"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    classId?: StringFilter<"Attendance"> | string
    santriId?: StringFilter<"Attendance"> | string
    mentorId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"Attendance"> | string | null
    imageUrl?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    santriId?: SortOrder
    mentorId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    class?: ClassOrderByWithRelationInput
    santri?: UserOrderByWithRelationInput
    mentor?: UserOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    classId_santriId_date?: AttendanceClassIdSantriIdDateCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    classId?: StringFilter<"Attendance"> | string
    santriId?: StringFilter<"Attendance"> | string
    mentorId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"Attendance"> | string | null
    imageUrl?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "classId_santriId_date">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    santriId?: SortOrder
    mentorId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    classId?: StringWithAggregatesFilter<"Attendance"> | string
    santriId?: StringWithAggregatesFilter<"Attendance"> | string
    mentorId?: StringWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusWithAggregatesFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    divisiId?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    mentorId?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    division?: XOR<DivisionScalarRelationFilter, DivisionWhereInput>
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
    attendances?: AttendanceListRelationFilter
    assignments?: AssignmentListRelationFilter
    santriProfiles?: SantriProfileListRelationFilter
    dailyJournals?: DailyJournalListRelationFilter
    monthlyEvaluations?: MonthlyEvaluationListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    divisiId?: SortOrder
    name?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
    division?: DivisionOrderByWithRelationInput
    mentor?: UserOrderByWithRelationInput
    attendances?: AttendanceOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
    santriProfiles?: SantriProfileOrderByRelationAggregateInput
    dailyJournals?: DailyJournalOrderByRelationAggregateInput
    monthlyEvaluations?: MonthlyEvaluationOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    divisiId?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    mentorId?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    division?: XOR<DivisionScalarRelationFilter, DivisionWhereInput>
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
    attendances?: AttendanceListRelationFilter
    assignments?: AssignmentListRelationFilter
    santriProfiles?: SantriProfileListRelationFilter
    dailyJournals?: DailyJournalListRelationFilter
    monthlyEvaluations?: MonthlyEvaluationListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    divisiId?: SortOrder
    name?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    divisiId?: StringWithAggregatesFilter<"Class"> | string
    name?: StringWithAggregatesFilter<"Class"> | string
    mentorId?: StringWithAggregatesFilter<"Class"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type DailyJournalWhereInput = {
    AND?: DailyJournalWhereInput | DailyJournalWhereInput[]
    OR?: DailyJournalWhereInput[]
    NOT?: DailyJournalWhereInput | DailyJournalWhereInput[]
    id?: StringFilter<"DailyJournal"> | string
    santriId?: StringFilter<"DailyJournal"> | string
    classId?: StringFilter<"DailyJournal"> | string
    mentorId?: StringFilter<"DailyJournal"> | string
    attitudeScore?: FloatFilter<"DailyJournal"> | number
    notes?: StringFilter<"DailyJournal"> | string
    date?: DateTimeFilter<"DailyJournal"> | Date | string
    description?: StringFilter<"DailyJournal"> | string
    tugasType?: EnumTugasTypeFilter<"DailyJournal"> | $Enums.TugasType
    createdAt?: DateTimeFilter<"DailyJournal"> | Date | string
    updatedAt?: DateTimeFilter<"DailyJournal"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DailyJournalOrderByWithRelationInput = {
    id?: SortOrder
    santriId?: SortOrder
    classId?: SortOrder
    mentorId?: SortOrder
    attitudeScore?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    description?: SortOrder
    tugasType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    class?: ClassOrderByWithRelationInput
    santri?: UserOrderByWithRelationInput
    mentor?: UserOrderByWithRelationInput
  }

  export type DailyJournalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyJournalWhereInput | DailyJournalWhereInput[]
    OR?: DailyJournalWhereInput[]
    NOT?: DailyJournalWhereInput | DailyJournalWhereInput[]
    santriId?: StringFilter<"DailyJournal"> | string
    classId?: StringFilter<"DailyJournal"> | string
    mentorId?: StringFilter<"DailyJournal"> | string
    attitudeScore?: FloatFilter<"DailyJournal"> | number
    notes?: StringFilter<"DailyJournal"> | string
    date?: DateTimeFilter<"DailyJournal"> | Date | string
    description?: StringFilter<"DailyJournal"> | string
    tugasType?: EnumTugasTypeFilter<"DailyJournal"> | $Enums.TugasType
    createdAt?: DateTimeFilter<"DailyJournal"> | Date | string
    updatedAt?: DateTimeFilter<"DailyJournal"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DailyJournalOrderByWithAggregationInput = {
    id?: SortOrder
    santriId?: SortOrder
    classId?: SortOrder
    mentorId?: SortOrder
    attitudeScore?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    description?: SortOrder
    tugasType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyJournalCountOrderByAggregateInput
    _avg?: DailyJournalAvgOrderByAggregateInput
    _max?: DailyJournalMaxOrderByAggregateInput
    _min?: DailyJournalMinOrderByAggregateInput
    _sum?: DailyJournalSumOrderByAggregateInput
  }

  export type DailyJournalScalarWhereWithAggregatesInput = {
    AND?: DailyJournalScalarWhereWithAggregatesInput | DailyJournalScalarWhereWithAggregatesInput[]
    OR?: DailyJournalScalarWhereWithAggregatesInput[]
    NOT?: DailyJournalScalarWhereWithAggregatesInput | DailyJournalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyJournal"> | string
    santriId?: StringWithAggregatesFilter<"DailyJournal"> | string
    classId?: StringWithAggregatesFilter<"DailyJournal"> | string
    mentorId?: StringWithAggregatesFilter<"DailyJournal"> | string
    attitudeScore?: FloatWithAggregatesFilter<"DailyJournal"> | number
    notes?: StringWithAggregatesFilter<"DailyJournal"> | string
    date?: DateTimeWithAggregatesFilter<"DailyJournal"> | Date | string
    description?: StringWithAggregatesFilter<"DailyJournal"> | string
    tugasType?: EnumTugasTypeWithAggregatesFilter<"DailyJournal"> | $Enums.TugasType
    createdAt?: DateTimeWithAggregatesFilter<"DailyJournal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyJournal"> | Date | string
  }

  export type DivisionWhereInput = {
    AND?: DivisionWhereInput | DivisionWhereInput[]
    OR?: DivisionWhereInput[]
    NOT?: DivisionWhereInput | DivisionWhereInput[]
    id?: StringFilter<"Division"> | string
    name?: StringFilter<"Division"> | string
    description?: StringNullableFilter<"Division"> | string | null
    createdAt?: DateTimeFilter<"Division"> | Date | string
    classes?: ClassListRelationFilter
  }

  export type DivisionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    classes?: ClassOrderByRelationAggregateInput
  }

  export type DivisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DivisionWhereInput | DivisionWhereInput[]
    OR?: DivisionWhereInput[]
    NOT?: DivisionWhereInput | DivisionWhereInput[]
    name?: StringFilter<"Division"> | string
    description?: StringNullableFilter<"Division"> | string | null
    createdAt?: DateTimeFilter<"Division"> | Date | string
    classes?: ClassListRelationFilter
  }, "id">

  export type DivisionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DivisionCountOrderByAggregateInput
    _max?: DivisionMaxOrderByAggregateInput
    _min?: DivisionMinOrderByAggregateInput
  }

  export type DivisionScalarWhereWithAggregatesInput = {
    AND?: DivisionScalarWhereWithAggregatesInput | DivisionScalarWhereWithAggregatesInput[]
    OR?: DivisionScalarWhereWithAggregatesInput[]
    NOT?: DivisionScalarWhereWithAggregatesInput | DivisionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Division"> | string
    name?: StringWithAggregatesFilter<"Division"> | string
    description?: StringNullableWithAggregatesFilter<"Division"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Division"> | Date | string
  }

  export type MonthlyEvaluationWhereInput = {
    AND?: MonthlyEvaluationWhereInput | MonthlyEvaluationWhereInput[]
    OR?: MonthlyEvaluationWhereInput[]
    NOT?: MonthlyEvaluationWhereInput | MonthlyEvaluationWhereInput[]
    id?: StringFilter<"MonthlyEvaluation"> | string
    santriId?: StringFilter<"MonthlyEvaluation"> | string
    classId?: StringFilter<"MonthlyEvaluation"> | string
    month?: IntFilter<"MonthlyEvaluation"> | number
    year?: IntFilter<"MonthlyEvaluation"> | number
    taskAvg?: FloatFilter<"MonthlyEvaluation"> | number
    attendancePoin?: IntFilter<"MonthlyEvaluation"> | number
    maxAttendPoin?: IntFilter<"MonthlyEvaluation"> | number
    attitudeAvg?: FloatFilter<"MonthlyEvaluation"> | number
    taskScore?: FloatFilter<"MonthlyEvaluation"> | number
    attendanceScore?: FloatFilter<"MonthlyEvaluation"> | number
    attitudeScore?: FloatFilter<"MonthlyEvaluation"> | number
    finalScore?: FloatFilter<"MonthlyEvaluation"> | number
    notes?: StringNullableFilter<"MonthlyEvaluation"> | string | null
    createdAt?: DateTimeFilter<"MonthlyEvaluation"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyEvaluation"> | Date | string
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }

  export type MonthlyEvaluationOrderByWithRelationInput = {
    id?: SortOrder
    santriId?: SortOrder
    classId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    taskAvg?: SortOrder
    attendancePoin?: SortOrder
    maxAttendPoin?: SortOrder
    attitudeAvg?: SortOrder
    taskScore?: SortOrder
    attendanceScore?: SortOrder
    attitudeScore?: SortOrder
    finalScore?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    santri?: UserOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type MonthlyEvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    santriId_classId_month_year?: MonthlyEvaluationSantriIdClassIdMonthYearCompoundUniqueInput
    AND?: MonthlyEvaluationWhereInput | MonthlyEvaluationWhereInput[]
    OR?: MonthlyEvaluationWhereInput[]
    NOT?: MonthlyEvaluationWhereInput | MonthlyEvaluationWhereInput[]
    santriId?: StringFilter<"MonthlyEvaluation"> | string
    classId?: StringFilter<"MonthlyEvaluation"> | string
    month?: IntFilter<"MonthlyEvaluation"> | number
    year?: IntFilter<"MonthlyEvaluation"> | number
    taskAvg?: FloatFilter<"MonthlyEvaluation"> | number
    attendancePoin?: IntFilter<"MonthlyEvaluation"> | number
    maxAttendPoin?: IntFilter<"MonthlyEvaluation"> | number
    attitudeAvg?: FloatFilter<"MonthlyEvaluation"> | number
    taskScore?: FloatFilter<"MonthlyEvaluation"> | number
    attendanceScore?: FloatFilter<"MonthlyEvaluation"> | number
    attitudeScore?: FloatFilter<"MonthlyEvaluation"> | number
    finalScore?: FloatFilter<"MonthlyEvaluation"> | number
    notes?: StringNullableFilter<"MonthlyEvaluation"> | string | null
    createdAt?: DateTimeFilter<"MonthlyEvaluation"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyEvaluation"> | Date | string
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }, "id" | "santriId_classId_month_year">

  export type MonthlyEvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    santriId?: SortOrder
    classId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    taskAvg?: SortOrder
    attendancePoin?: SortOrder
    maxAttendPoin?: SortOrder
    attitudeAvg?: SortOrder
    taskScore?: SortOrder
    attendanceScore?: SortOrder
    attitudeScore?: SortOrder
    finalScore?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MonthlyEvaluationCountOrderByAggregateInput
    _avg?: MonthlyEvaluationAvgOrderByAggregateInput
    _max?: MonthlyEvaluationMaxOrderByAggregateInput
    _min?: MonthlyEvaluationMinOrderByAggregateInput
    _sum?: MonthlyEvaluationSumOrderByAggregateInput
  }

  export type MonthlyEvaluationScalarWhereWithAggregatesInput = {
    AND?: MonthlyEvaluationScalarWhereWithAggregatesInput | MonthlyEvaluationScalarWhereWithAggregatesInput[]
    OR?: MonthlyEvaluationScalarWhereWithAggregatesInput[]
    NOT?: MonthlyEvaluationScalarWhereWithAggregatesInput | MonthlyEvaluationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonthlyEvaluation"> | string
    santriId?: StringWithAggregatesFilter<"MonthlyEvaluation"> | string
    classId?: StringWithAggregatesFilter<"MonthlyEvaluation"> | string
    month?: IntWithAggregatesFilter<"MonthlyEvaluation"> | number
    year?: IntWithAggregatesFilter<"MonthlyEvaluation"> | number
    taskAvg?: FloatWithAggregatesFilter<"MonthlyEvaluation"> | number
    attendancePoin?: IntWithAggregatesFilter<"MonthlyEvaluation"> | number
    maxAttendPoin?: IntWithAggregatesFilter<"MonthlyEvaluation"> | number
    attitudeAvg?: FloatWithAggregatesFilter<"MonthlyEvaluation"> | number
    taskScore?: FloatWithAggregatesFilter<"MonthlyEvaluation"> | number
    attendanceScore?: FloatWithAggregatesFilter<"MonthlyEvaluation"> | number
    attitudeScore?: FloatWithAggregatesFilter<"MonthlyEvaluation"> | number
    finalScore?: FloatWithAggregatesFilter<"MonthlyEvaluation"> | number
    notes?: StringNullableWithAggregatesFilter<"MonthlyEvaluation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MonthlyEvaluation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MonthlyEvaluation"> | Date | string
  }

  export type SantriProfileWhereInput = {
    AND?: SantriProfileWhereInput | SantriProfileWhereInput[]
    OR?: SantriProfileWhereInput[]
    NOT?: SantriProfileWhereInput | SantriProfileWhereInput[]
    id?: StringFilter<"SantriProfile"> | string
    userId?: StringFilter<"SantriProfile"> | string
    gender?: EnumGenderNullableFilter<"SantriProfile"> | $Enums.Gender | null
    phone?: StringNullableFilter<"SantriProfile"> | string | null
    birthDate?: DateTimeNullableFilter<"SantriProfile"> | Date | string | null
    address?: StringNullableFilter<"SantriProfile"> | string | null
    photoUrl?: StringNullableFilter<"SantriProfile"> | string | null
    classId?: StringNullableFilter<"SantriProfile"> | string | null
    createdAt?: DateTimeFilter<"SantriProfile"> | Date | string
    updatedAt?: DateTimeFilter<"SantriProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
  }

  export type SantriProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    classId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type SantriProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SantriProfileWhereInput | SantriProfileWhereInput[]
    OR?: SantriProfileWhereInput[]
    NOT?: SantriProfileWhereInput | SantriProfileWhereInput[]
    gender?: EnumGenderNullableFilter<"SantriProfile"> | $Enums.Gender | null
    phone?: StringNullableFilter<"SantriProfile"> | string | null
    birthDate?: DateTimeNullableFilter<"SantriProfile"> | Date | string | null
    address?: StringNullableFilter<"SantriProfile"> | string | null
    photoUrl?: StringNullableFilter<"SantriProfile"> | string | null
    classId?: StringNullableFilter<"SantriProfile"> | string | null
    createdAt?: DateTimeFilter<"SantriProfile"> | Date | string
    updatedAt?: DateTimeFilter<"SantriProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
  }, "id" | "userId">

  export type SantriProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    classId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SantriProfileCountOrderByAggregateInput
    _max?: SantriProfileMaxOrderByAggregateInput
    _min?: SantriProfileMinOrderByAggregateInput
  }

  export type SantriProfileScalarWhereWithAggregatesInput = {
    AND?: SantriProfileScalarWhereWithAggregatesInput | SantriProfileScalarWhereWithAggregatesInput[]
    OR?: SantriProfileScalarWhereWithAggregatesInput[]
    NOT?: SantriProfileScalarWhereWithAggregatesInput | SantriProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SantriProfile"> | string
    userId?: StringWithAggregatesFilter<"SantriProfile"> | string
    gender?: EnumGenderNullableWithAggregatesFilter<"SantriProfile"> | $Enums.Gender | null
    phone?: StringNullableWithAggregatesFilter<"SantriProfile"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"SantriProfile"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"SantriProfile"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"SantriProfile"> | string | null
    classId?: StringNullableWithAggregatesFilter<"SantriProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SantriProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SantriProfile"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nis?: StringNullableFilter<"User"> | string | null
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    waliProfile?: XOR<WaliProfileNullableScalarRelationFilter, WaliProfileWhereInput> | null
    verifications?: VerificationListRelationFilter
    santriProfile?: XOR<SantriProfileNullableScalarRelationFilter, SantriProfileWhereInput> | null
    mentorClasses?: ClassListRelationFilter
    mentorAttendances?: AttendanceListRelationFilter
    santriAttendances?: AttendanceListRelationFilter
    mentorAssignments?: AssignmentListRelationFilter
    santriSubmissions?: AssignmentContentListRelationFilter
    waliRelations?: WaliSantriRelationListRelationFilter
    santriRelations?: WaliSantriRelationListRelationFilter
    dailyJournals?: DailyJournalListRelationFilter
    mentorDailyJournals?: DailyJournalListRelationFilter
    monthlyEvaluations?: MonthlyEvaluationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nis?: SortOrderInput | SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    waliProfile?: WaliProfileOrderByWithRelationInput
    verifications?: VerificationOrderByRelationAggregateInput
    santriProfile?: SantriProfileOrderByWithRelationInput
    mentorClasses?: ClassOrderByRelationAggregateInput
    mentorAttendances?: AttendanceOrderByRelationAggregateInput
    santriAttendances?: AttendanceOrderByRelationAggregateInput
    mentorAssignments?: AssignmentOrderByRelationAggregateInput
    santriSubmissions?: AssignmentContentOrderByRelationAggregateInput
    waliRelations?: WaliSantriRelationOrderByRelationAggregateInput
    santriRelations?: WaliSantriRelationOrderByRelationAggregateInput
    dailyJournals?: DailyJournalOrderByRelationAggregateInput
    mentorDailyJournals?: DailyJournalOrderByRelationAggregateInput
    monthlyEvaluations?: MonthlyEvaluationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nis?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    waliProfile?: XOR<WaliProfileNullableScalarRelationFilter, WaliProfileWhereInput> | null
    verifications?: VerificationListRelationFilter
    santriProfile?: XOR<SantriProfileNullableScalarRelationFilter, SantriProfileWhereInput> | null
    mentorClasses?: ClassListRelationFilter
    mentorAttendances?: AttendanceListRelationFilter
    santriAttendances?: AttendanceListRelationFilter
    mentorAssignments?: AssignmentListRelationFilter
    santriSubmissions?: AssignmentContentListRelationFilter
    waliRelations?: WaliSantriRelationListRelationFilter
    santriRelations?: WaliSantriRelationListRelationFilter
    dailyJournals?: DailyJournalListRelationFilter
    mentorDailyJournals?: DailyJournalListRelationFilter
    monthlyEvaluations?: MonthlyEvaluationListRelationFilter
  }, "id" | "nis" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nis?: SortOrderInput | SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nis?: StringNullableWithAggregatesFilter<"User"> | string | null
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WaliProfileWhereInput = {
    AND?: WaliProfileWhereInput | WaliProfileWhereInput[]
    OR?: WaliProfileWhereInput[]
    NOT?: WaliProfileWhereInput | WaliProfileWhereInput[]
    id?: StringFilter<"WaliProfile"> | string
    userId?: StringFilter<"WaliProfile"> | string
    gender?: EnumGenderNullableFilter<"WaliProfile"> | $Enums.Gender | null
    phone?: StringNullableFilter<"WaliProfile"> | string | null
    address?: StringNullableFilter<"WaliProfile"> | string | null
    photoUrl?: StringNullableFilter<"WaliProfile"> | string | null
    job?: StringNullableFilter<"WaliProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WaliProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    job?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WaliProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: WaliProfileWhereInput | WaliProfileWhereInput[]
    OR?: WaliProfileWhereInput[]
    NOT?: WaliProfileWhereInput | WaliProfileWhereInput[]
    gender?: EnumGenderNullableFilter<"WaliProfile"> | $Enums.Gender | null
    phone?: StringNullableFilter<"WaliProfile"> | string | null
    address?: StringNullableFilter<"WaliProfile"> | string | null
    photoUrl?: StringNullableFilter<"WaliProfile"> | string | null
    job?: StringNullableFilter<"WaliProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type WaliProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    job?: SortOrderInput | SortOrder
    _count?: WaliProfileCountOrderByAggregateInput
    _max?: WaliProfileMaxOrderByAggregateInput
    _min?: WaliProfileMinOrderByAggregateInput
  }

  export type WaliProfileScalarWhereWithAggregatesInput = {
    AND?: WaliProfileScalarWhereWithAggregatesInput | WaliProfileScalarWhereWithAggregatesInput[]
    OR?: WaliProfileScalarWhereWithAggregatesInput[]
    NOT?: WaliProfileScalarWhereWithAggregatesInput | WaliProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WaliProfile"> | string
    userId?: StringWithAggregatesFilter<"WaliProfile"> | string
    gender?: EnumGenderNullableWithAggregatesFilter<"WaliProfile"> | $Enums.Gender | null
    phone?: StringNullableWithAggregatesFilter<"WaliProfile"> | string | null
    address?: StringNullableWithAggregatesFilter<"WaliProfile"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"WaliProfile"> | string | null
    job?: StringNullableWithAggregatesFilter<"WaliProfile"> | string | null
  }

  export type WaliSantriRelationWhereInput = {
    AND?: WaliSantriRelationWhereInput | WaliSantriRelationWhereInput[]
    OR?: WaliSantriRelationWhereInput[]
    NOT?: WaliSantriRelationWhereInput | WaliSantriRelationWhereInput[]
    id?: StringFilter<"WaliSantriRelation"> | string
    waliId?: StringFilter<"WaliSantriRelation"> | string
    santriId?: StringFilter<"WaliSantriRelation"> | string
    category?: EnumWaliSantriCategoryFilter<"WaliSantriRelation"> | $Enums.WaliSantriCategory
    createdAt?: DateTimeFilter<"WaliSantriRelation"> | Date | string
    updatedAt?: DateTimeFilter<"WaliSantriRelation"> | Date | string
    wali?: XOR<UserScalarRelationFilter, UserWhereInput>
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WaliSantriRelationOrderByWithRelationInput = {
    id?: SortOrder
    waliId?: SortOrder
    santriId?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wali?: UserOrderByWithRelationInput
    santri?: UserOrderByWithRelationInput
  }

  export type WaliSantriRelationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    waliId_santriId?: WaliSantriRelationWaliIdSantriIdCompoundUniqueInput
    AND?: WaliSantriRelationWhereInput | WaliSantriRelationWhereInput[]
    OR?: WaliSantriRelationWhereInput[]
    NOT?: WaliSantriRelationWhereInput | WaliSantriRelationWhereInput[]
    waliId?: StringFilter<"WaliSantriRelation"> | string
    santriId?: StringFilter<"WaliSantriRelation"> | string
    category?: EnumWaliSantriCategoryFilter<"WaliSantriRelation"> | $Enums.WaliSantriCategory
    createdAt?: DateTimeFilter<"WaliSantriRelation"> | Date | string
    updatedAt?: DateTimeFilter<"WaliSantriRelation"> | Date | string
    wali?: XOR<UserScalarRelationFilter, UserWhereInput>
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "waliId_santriId">

  export type WaliSantriRelationOrderByWithAggregationInput = {
    id?: SortOrder
    waliId?: SortOrder
    santriId?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WaliSantriRelationCountOrderByAggregateInput
    _max?: WaliSantriRelationMaxOrderByAggregateInput
    _min?: WaliSantriRelationMinOrderByAggregateInput
  }

  export type WaliSantriRelationScalarWhereWithAggregatesInput = {
    AND?: WaliSantriRelationScalarWhereWithAggregatesInput | WaliSantriRelationScalarWhereWithAggregatesInput[]
    OR?: WaliSantriRelationScalarWhereWithAggregatesInput[]
    NOT?: WaliSantriRelationScalarWhereWithAggregatesInput | WaliSantriRelationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WaliSantriRelation"> | string
    waliId?: StringWithAggregatesFilter<"WaliSantriRelation"> | string
    santriId?: StringWithAggregatesFilter<"WaliSantriRelation"> | string
    category?: EnumWaliSantriCategoryWithAggregatesFilter<"WaliSantriRelation"> | $Enums.WaliSantriCategory
    createdAt?: DateTimeWithAggregatesFilter<"WaliSantriRelation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WaliSantriRelation"> | Date | string
  }

  export type VerificationCreateInput = {
    id?: string
    otpCode: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVerificationsInput
  }

  export type VerificationUncheckedCreateInput = {
    id?: string
    user_id: string
    otpCode: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVerificationsNestedInput
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id?: string
    user_id: string
    otpCode: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateInput = {
    id?: string
    title: string
    description?: string | null
    submissionType: $Enums.SubmissionType
    attachmentUrl?: string | null
    due_date: Date | string
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutAssignmentsInput
    mentor: UserCreateNestedOneWithoutMentorAssignmentsInput
    submissions?: AssignmentContentCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: string
    classId: string
    mentorId: string
    title: string
    description?: string | null
    submissionType: $Enums.SubmissionType
    attachmentUrl?: string | null
    due_date: Date | string
    createdAt?: Date | string
    submissions?: AssignmentContentUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submissionType?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAssignmentsNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentorAssignmentsNestedInput
    submissions?: AssignmentContentUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submissionType?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AssignmentContentUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentCreateManyInput = {
    id?: string
    classId: string
    mentorId: string
    title: string
    description?: string | null
    submissionType: $Enums.SubmissionType
    attachmentUrl?: string | null
    due_date: Date | string
    createdAt?: Date | string
  }

  export type AssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submissionType?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submissionType?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentContentCreateInput = {
    id?: string
    contentType: $Enums.ContentType
    fileUrl?: AssignmentContentCreatefileUrlInput | string[]
    score?: number | null
    mentorFeedback?: string | null
    status?: $Enums.GradingStatus
    submittedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionsInput
    santri: UserCreateNestedOneWithoutSantriSubmissionsInput
  }

  export type AssignmentContentUncheckedCreateInput = {
    id?: string
    assignmentId: string
    santriId: string
    contentType: $Enums.ContentType
    fileUrl?: AssignmentContentCreatefileUrlInput | string[]
    score?: number | null
    mentorFeedback?: string | null
    status?: $Enums.GradingStatus
    submittedAt?: Date | string
  }

  export type AssignmentContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    fileUrl?: AssignmentContentUpdatefileUrlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput
    santri?: UserUpdateOneRequiredWithoutSantriSubmissionsNestedInput
  }

  export type AssignmentContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    fileUrl?: AssignmentContentUpdatefileUrlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentContentCreateManyInput = {
    id?: string
    assignmentId: string
    santriId: string
    contentType: $Enums.ContentType
    fileUrl?: AssignmentContentCreatefileUrlInput | string[]
    score?: number | null
    mentorFeedback?: string | null
    status?: $Enums.GradingStatus
    submittedAt?: Date | string
  }

  export type AssignmentContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    fileUrl?: AssignmentContentUpdatefileUrlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    fileUrl?: AssignmentContentUpdatefileUrlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutAttendancesInput
    santri: UserCreateNestedOneWithoutSantriAttendancesInput
    mentor: UserCreateNestedOneWithoutMentorAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    classId: string
    santriId: string
    mentorId: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAttendancesNestedInput
    santri?: UserUpdateOneRequiredWithoutSantriAttendancesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentorAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    classId: string
    santriId: string
    mentorId: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    division: DivisionCreateNestedOneWithoutClassesInput
    mentor: UserCreateNestedOneWithoutMentorClassesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    santriProfiles?: SantriProfileCreateNestedManyWithoutClassInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutClassInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    divisiId: string
    name: string
    mentorId: string
    createdAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    santriProfiles?: SantriProfileUncheckedCreateNestedManyWithoutClassInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutClassInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    division?: DivisionUpdateOneRequiredWithoutClassesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentorClassesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    santriProfiles?: SantriProfileUpdateManyWithoutClassNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutClassNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    divisiId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    santriProfiles?: SantriProfileUncheckedUpdateManyWithoutClassNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutClassNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    divisiId: string
    name: string
    mentorId: string
    createdAt?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    divisiId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyJournalCreateInput = {
    id?: string
    attitudeScore?: number
    notes: string
    date: Date | string
    description: string
    tugasType?: $Enums.TugasType
    createdAt?: Date | string
    updatedAt?: Date | string
    class: ClassCreateNestedOneWithoutDailyJournalsInput
    santri: UserCreateNestedOneWithoutDailyJournalsInput
    mentor: UserCreateNestedOneWithoutMentorDailyJournalsInput
  }

  export type DailyJournalUncheckedCreateInput = {
    id?: string
    santriId: string
    classId: string
    mentorId: string
    attitudeScore?: number
    notes: string
    date: Date | string
    description: string
    tugasType?: $Enums.TugasType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyJournalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    tugasType?: EnumTugasTypeFieldUpdateOperationsInput | $Enums.TugasType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutDailyJournalsNestedInput
    santri?: UserUpdateOneRequiredWithoutDailyJournalsNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentorDailyJournalsNestedInput
  }

  export type DailyJournalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    tugasType?: EnumTugasTypeFieldUpdateOperationsInput | $Enums.TugasType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyJournalCreateManyInput = {
    id?: string
    santriId: string
    classId: string
    mentorId: string
    attitudeScore?: number
    notes: string
    date: Date | string
    description: string
    tugasType?: $Enums.TugasType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyJournalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    tugasType?: EnumTugasTypeFieldUpdateOperationsInput | $Enums.TugasType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyJournalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    tugasType?: EnumTugasTypeFieldUpdateOperationsInput | $Enums.TugasType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisionCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    classes?: ClassCreateNestedManyWithoutDivisionInput
  }

  export type DivisionUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    classes?: ClassUncheckedCreateNestedManyWithoutDivisionInput
  }

  export type DivisionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUncheckedUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type DivisionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyEvaluationCreateInput = {
    id?: string
    month: number
    year: number
    taskAvg?: number
    attendancePoin?: number
    maxAttendPoin?: number
    attitudeAvg?: number
    taskScore?: number
    attendanceScore?: number
    attitudeScore?: number
    finalScore: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    santri: UserCreateNestedOneWithoutMonthlyEvaluationsInput
    class: ClassCreateNestedOneWithoutMonthlyEvaluationsInput
  }

  export type MonthlyEvaluationUncheckedCreateInput = {
    id?: string
    santriId: string
    classId: string
    month: number
    year: number
    taskAvg?: number
    attendancePoin?: number
    maxAttendPoin?: number
    attitudeAvg?: number
    taskScore?: number
    attendanceScore?: number
    attitudeScore?: number
    finalScore: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyEvaluationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    taskAvg?: FloatFieldUpdateOperationsInput | number
    attendancePoin?: IntFieldUpdateOperationsInput | number
    maxAttendPoin?: IntFieldUpdateOperationsInput | number
    attitudeAvg?: FloatFieldUpdateOperationsInput | number
    taskScore?: FloatFieldUpdateOperationsInput | number
    attendanceScore?: FloatFieldUpdateOperationsInput | number
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    finalScore?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    santri?: UserUpdateOneRequiredWithoutMonthlyEvaluationsNestedInput
    class?: ClassUpdateOneRequiredWithoutMonthlyEvaluationsNestedInput
  }

  export type MonthlyEvaluationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    taskAvg?: FloatFieldUpdateOperationsInput | number
    attendancePoin?: IntFieldUpdateOperationsInput | number
    maxAttendPoin?: IntFieldUpdateOperationsInput | number
    attitudeAvg?: FloatFieldUpdateOperationsInput | number
    taskScore?: FloatFieldUpdateOperationsInput | number
    attendanceScore?: FloatFieldUpdateOperationsInput | number
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    finalScore?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyEvaluationCreateManyInput = {
    id?: string
    santriId: string
    classId: string
    month: number
    year: number
    taskAvg?: number
    attendancePoin?: number
    maxAttendPoin?: number
    attitudeAvg?: number
    taskScore?: number
    attendanceScore?: number
    attitudeScore?: number
    finalScore: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyEvaluationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    taskAvg?: FloatFieldUpdateOperationsInput | number
    attendancePoin?: IntFieldUpdateOperationsInput | number
    maxAttendPoin?: IntFieldUpdateOperationsInput | number
    attitudeAvg?: FloatFieldUpdateOperationsInput | number
    taskScore?: FloatFieldUpdateOperationsInput | number
    attendanceScore?: FloatFieldUpdateOperationsInput | number
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    finalScore?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyEvaluationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    taskAvg?: FloatFieldUpdateOperationsInput | number
    attendancePoin?: IntFieldUpdateOperationsInput | number
    maxAttendPoin?: IntFieldUpdateOperationsInput | number
    attitudeAvg?: FloatFieldUpdateOperationsInput | number
    taskScore?: FloatFieldUpdateOperationsInput | number
    attendanceScore?: FloatFieldUpdateOperationsInput | number
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    finalScore?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SantriProfileCreateInput = {
    id?: string
    gender?: $Enums.Gender | null
    phone?: string | null
    birthDate?: Date | string | null
    address?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSantriProfileInput
    class?: ClassCreateNestedOneWithoutSantriProfilesInput
  }

  export type SantriProfileUncheckedCreateInput = {
    id?: string
    userId: string
    gender?: $Enums.Gender | null
    phone?: string | null
    birthDate?: Date | string | null
    address?: string | null
    photoUrl?: string | null
    classId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SantriProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSantriProfileNestedInput
    class?: ClassUpdateOneWithoutSantriProfilesNestedInput
  }

  export type SantriProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SantriProfileCreateManyInput = {
    id?: string
    userId: string
    gender?: $Enums.Gender | null
    phone?: string | null
    birthDate?: Date | string | null
    address?: string | null
    photoUrl?: string | null
    classId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SantriProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SantriProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileCreateNestedOneWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileCreateNestedOneWithoutUserInput
    mentorClasses?: ClassCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileUncheckedCreateNestedOneWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentorClasses?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUpdateOneWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUncheckedUpdateOneWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUncheckedUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaliProfileCreateInput = {
    id?: string
    gender?: $Enums.Gender | null
    phone?: string | null
    address?: string | null
    photoUrl?: string | null
    job?: string | null
    user: UserCreateNestedOneWithoutWaliProfileInput
  }

  export type WaliProfileUncheckedCreateInput = {
    id?: string
    userId: string
    gender?: $Enums.Gender | null
    phone?: string | null
    address?: string | null
    photoUrl?: string | null
    job?: string | null
  }

  export type WaliProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutWaliProfileNestedInput
  }

  export type WaliProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WaliProfileCreateManyInput = {
    id?: string
    userId: string
    gender?: $Enums.Gender | null
    phone?: string | null
    address?: string | null
    photoUrl?: string | null
    job?: string | null
  }

  export type WaliProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WaliProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WaliSantriRelationCreateInput = {
    id?: string
    category?: $Enums.WaliSantriCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    wali: UserCreateNestedOneWithoutWaliRelationsInput
    santri: UserCreateNestedOneWithoutSantriRelationsInput
  }

  export type WaliSantriRelationUncheckedCreateInput = {
    id?: string
    waliId: string
    santriId: string
    category?: $Enums.WaliSantriCategory
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaliSantriRelationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wali?: UserUpdateOneRequiredWithoutWaliRelationsNestedInput
    santri?: UserUpdateOneRequiredWithoutSantriRelationsNestedInput
  }

  export type WaliSantriRelationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    waliId?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaliSantriRelationCreateManyInput = {
    id?: string
    waliId: string
    santriId: string
    category?: $Enums.WaliSantriCategory
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaliSantriRelationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaliSantriRelationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    waliId?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VerificationUser_idOtpCodeCompoundUniqueInput = {
    user_id: string
    otpCode: string
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    otpCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    otpCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    otpCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSubmissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionType | EnumSubmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionTypeFilter<$PrismaModel> | $Enums.SubmissionType
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type AssignmentContentListRelationFilter = {
    every?: AssignmentContentWhereInput
    some?: AssignmentContentWhereInput
    none?: AssignmentContentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssignmentContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    submissionType?: SortOrder
    attachmentUrl?: SortOrder
    due_date?: SortOrder
    createdAt?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    submissionType?: SortOrder
    attachmentUrl?: SortOrder
    due_date?: SortOrder
    createdAt?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    mentorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    submissionType?: SortOrder
    attachmentUrl?: SortOrder
    due_date?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSubmissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionType | EnumSubmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubmissionTypeFilter<$PrismaModel>
  }

  export type EnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumGradingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GradingStatus | EnumGradingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradingStatusFilter<$PrismaModel> | $Enums.GradingStatus
  }

  export type AssignmentScalarRelationFilter = {
    is?: AssignmentWhereInput
    isNot?: AssignmentWhereInput
  }

  export type AssignmentContentAssignmentIdSantriIdCompoundUniqueInput = {
    assignmentId: string
    santriId: string
  }

  export type AssignmentContentCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    santriId?: SortOrder
    contentType?: SortOrder
    fileUrl?: SortOrder
    score?: SortOrder
    mentorFeedback?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
  }

  export type AssignmentContentAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type AssignmentContentMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    santriId?: SortOrder
    contentType?: SortOrder
    score?: SortOrder
    mentorFeedback?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
  }

  export type AssignmentContentMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    santriId?: SortOrder
    contentType?: SortOrder
    score?: SortOrder
    mentorFeedback?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
  }

  export type AssignmentContentSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumGradingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GradingStatus | EnumGradingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradingStatusWithAggregatesFilter<$PrismaModel> | $Enums.GradingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradingStatusFilter<$PrismaModel>
    _max?: NestedEnumGradingStatusFilter<$PrismaModel>
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type AttendanceClassIdSantriIdDateCompoundUniqueInput = {
    classId: string
    santriId: string
    date: Date | string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    santriId?: SortOrder
    mentorId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    santriId?: SortOrder
    mentorId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    santriId?: SortOrder
    mentorId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type DivisionScalarRelationFilter = {
    is?: DivisionWhereInput
    isNot?: DivisionWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type SantriProfileListRelationFilter = {
    every?: SantriProfileWhereInput
    some?: SantriProfileWhereInput
    none?: SantriProfileWhereInput
  }

  export type DailyJournalListRelationFilter = {
    every?: DailyJournalWhereInput
    some?: DailyJournalWhereInput
    none?: DailyJournalWhereInput
  }

  export type MonthlyEvaluationListRelationFilter = {
    every?: MonthlyEvaluationWhereInput
    some?: MonthlyEvaluationWhereInput
    none?: MonthlyEvaluationWhereInput
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SantriProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyJournalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonthlyEvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    divisiId?: SortOrder
    name?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    divisiId?: SortOrder
    name?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    divisiId?: SortOrder
    name?: SortOrder
    mentorId?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumTugasTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TugasType | EnumTugasTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TugasType[] | ListEnumTugasTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TugasType[] | ListEnumTugasTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTugasTypeFilter<$PrismaModel> | $Enums.TugasType
  }

  export type DailyJournalCountOrderByAggregateInput = {
    id?: SortOrder
    santriId?: SortOrder
    classId?: SortOrder
    mentorId?: SortOrder
    attitudeScore?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    description?: SortOrder
    tugasType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyJournalAvgOrderByAggregateInput = {
    attitudeScore?: SortOrder
  }

  export type DailyJournalMaxOrderByAggregateInput = {
    id?: SortOrder
    santriId?: SortOrder
    classId?: SortOrder
    mentorId?: SortOrder
    attitudeScore?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    description?: SortOrder
    tugasType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyJournalMinOrderByAggregateInput = {
    id?: SortOrder
    santriId?: SortOrder
    classId?: SortOrder
    mentorId?: SortOrder
    attitudeScore?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    description?: SortOrder
    tugasType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyJournalSumOrderByAggregateInput = {
    attitudeScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type EnumTugasTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TugasType | EnumTugasTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TugasType[] | ListEnumTugasTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TugasType[] | ListEnumTugasTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTugasTypeWithAggregatesFilter<$PrismaModel> | $Enums.TugasType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTugasTypeFilter<$PrismaModel>
    _max?: NestedEnumTugasTypeFilter<$PrismaModel>
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DivisionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type DivisionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type DivisionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MonthlyEvaluationSantriIdClassIdMonthYearCompoundUniqueInput = {
    santriId: string
    classId: string
    month: number
    year: number
  }

  export type MonthlyEvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    santriId?: SortOrder
    classId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    taskAvg?: SortOrder
    attendancePoin?: SortOrder
    maxAttendPoin?: SortOrder
    attitudeAvg?: SortOrder
    taskScore?: SortOrder
    attendanceScore?: SortOrder
    attitudeScore?: SortOrder
    finalScore?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyEvaluationAvgOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
    taskAvg?: SortOrder
    attendancePoin?: SortOrder
    maxAttendPoin?: SortOrder
    attitudeAvg?: SortOrder
    taskScore?: SortOrder
    attendanceScore?: SortOrder
    attitudeScore?: SortOrder
    finalScore?: SortOrder
  }

  export type MonthlyEvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    santriId?: SortOrder
    classId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    taskAvg?: SortOrder
    attendancePoin?: SortOrder
    maxAttendPoin?: SortOrder
    attitudeAvg?: SortOrder
    taskScore?: SortOrder
    attendanceScore?: SortOrder
    attitudeScore?: SortOrder
    finalScore?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyEvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    santriId?: SortOrder
    classId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    taskAvg?: SortOrder
    attendancePoin?: SortOrder
    maxAttendPoin?: SortOrder
    attitudeAvg?: SortOrder
    taskScore?: SortOrder
    attendanceScore?: SortOrder
    attitudeScore?: SortOrder
    finalScore?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyEvaluationSumOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
    taskAvg?: SortOrder
    attendancePoin?: SortOrder
    maxAttendPoin?: SortOrder
    attitudeAvg?: SortOrder
    taskScore?: SortOrder
    attendanceScore?: SortOrder
    attitudeScore?: SortOrder
    finalScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClassNullableScalarRelationFilter = {
    is?: ClassWhereInput | null
    isNot?: ClassWhereInput | null
  }

  export type SantriProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    address?: SortOrder
    photoUrl?: SortOrder
    classId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SantriProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    address?: SortOrder
    photoUrl?: SortOrder
    classId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SantriProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    address?: SortOrder
    photoUrl?: SortOrder
    classId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WaliProfileNullableScalarRelationFilter = {
    is?: WaliProfileWhereInput | null
    isNot?: WaliProfileWhereInput | null
  }

  export type VerificationListRelationFilter = {
    every?: VerificationWhereInput
    some?: VerificationWhereInput
    none?: VerificationWhereInput
  }

  export type SantriProfileNullableScalarRelationFilter = {
    is?: SantriProfileWhereInput | null
    isNot?: SantriProfileWhereInput | null
  }

  export type WaliSantriRelationListRelationFilter = {
    every?: WaliSantriRelationWhereInput
    some?: WaliSantriRelationWhereInput
    none?: WaliSantriRelationWhereInput
  }

  export type VerificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaliSantriRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nis?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WaliProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    photoUrl?: SortOrder
    job?: SortOrder
  }

  export type WaliProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    photoUrl?: SortOrder
    job?: SortOrder
  }

  export type WaliProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    photoUrl?: SortOrder
    job?: SortOrder
  }

  export type EnumWaliSantriCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.WaliSantriCategory | EnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWaliSantriCategoryFilter<$PrismaModel> | $Enums.WaliSantriCategory
  }

  export type WaliSantriRelationWaliIdSantriIdCompoundUniqueInput = {
    waliId: string
    santriId: string
  }

  export type WaliSantriRelationCountOrderByAggregateInput = {
    id?: SortOrder
    waliId?: SortOrder
    santriId?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaliSantriRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    waliId?: SortOrder
    santriId?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaliSantriRelationMinOrderByAggregateInput = {
    id?: SortOrder
    waliId?: SortOrder
    santriId?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumWaliSantriCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WaliSantriCategory | EnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWaliSantriCategoryWithAggregatesFilter<$PrismaModel> | $Enums.WaliSantriCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWaliSantriCategoryFilter<$PrismaModel>
    _max?: NestedEnumWaliSantriCategoryFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutVerificationsInput = {
    create?: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutVerificationsNestedInput = {
    create?: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationsInput
    upsert?: UserUpsertWithoutVerificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationsInput, UserUpdateWithoutVerificationsInput>, UserUncheckedUpdateWithoutVerificationsInput>
  }

  export type ClassCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<ClassCreateWithoutAssignmentsInput, ClassUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAssignmentsInput
    connect?: ClassWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMentorAssignmentsInput = {
    create?: XOR<UserCreateWithoutMentorAssignmentsInput, UserUncheckedCreateWithoutMentorAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type AssignmentContentCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<AssignmentContentCreateWithoutAssignmentInput, AssignmentContentUncheckedCreateWithoutAssignmentInput> | AssignmentContentCreateWithoutAssignmentInput[] | AssignmentContentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutAssignmentInput | AssignmentContentCreateOrConnectWithoutAssignmentInput[]
    createMany?: AssignmentContentCreateManyAssignmentInputEnvelope
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
  }

  export type AssignmentContentUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<AssignmentContentCreateWithoutAssignmentInput, AssignmentContentUncheckedCreateWithoutAssignmentInput> | AssignmentContentCreateWithoutAssignmentInput[] | AssignmentContentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutAssignmentInput | AssignmentContentCreateOrConnectWithoutAssignmentInput[]
    createMany?: AssignmentContentCreateManyAssignmentInputEnvelope
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSubmissionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionType
  }

  export type ClassUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<ClassCreateWithoutAssignmentsInput, ClassUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAssignmentsInput
    upsert?: ClassUpsertWithoutAssignmentsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutAssignmentsInput, ClassUpdateWithoutAssignmentsInput>, ClassUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutMentorAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutMentorAssignmentsInput, UserUncheckedCreateWithoutMentorAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorAssignmentsInput
    upsert?: UserUpsertWithoutMentorAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentorAssignmentsInput, UserUpdateWithoutMentorAssignmentsInput>, UserUncheckedUpdateWithoutMentorAssignmentsInput>
  }

  export type AssignmentContentUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<AssignmentContentCreateWithoutAssignmentInput, AssignmentContentUncheckedCreateWithoutAssignmentInput> | AssignmentContentCreateWithoutAssignmentInput[] | AssignmentContentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutAssignmentInput | AssignmentContentCreateOrConnectWithoutAssignmentInput[]
    upsert?: AssignmentContentUpsertWithWhereUniqueWithoutAssignmentInput | AssignmentContentUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: AssignmentContentCreateManyAssignmentInputEnvelope
    set?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    disconnect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    delete?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    update?: AssignmentContentUpdateWithWhereUniqueWithoutAssignmentInput | AssignmentContentUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: AssignmentContentUpdateManyWithWhereWithoutAssignmentInput | AssignmentContentUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: AssignmentContentScalarWhereInput | AssignmentContentScalarWhereInput[]
  }

  export type AssignmentContentUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<AssignmentContentCreateWithoutAssignmentInput, AssignmentContentUncheckedCreateWithoutAssignmentInput> | AssignmentContentCreateWithoutAssignmentInput[] | AssignmentContentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutAssignmentInput | AssignmentContentCreateOrConnectWithoutAssignmentInput[]
    upsert?: AssignmentContentUpsertWithWhereUniqueWithoutAssignmentInput | AssignmentContentUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: AssignmentContentCreateManyAssignmentInputEnvelope
    set?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    disconnect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    delete?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    update?: AssignmentContentUpdateWithWhereUniqueWithoutAssignmentInput | AssignmentContentUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: AssignmentContentUpdateManyWithWhereWithoutAssignmentInput | AssignmentContentUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: AssignmentContentScalarWhereInput | AssignmentContentScalarWhereInput[]
  }

  export type AssignmentContentCreatefileUrlInput = {
    set: string[]
  }

  export type AssignmentCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSantriSubmissionsInput = {
    create?: XOR<UserCreateWithoutSantriSubmissionsInput, UserUncheckedCreateWithoutSantriSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantriSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType
  }

  export type AssignmentContentUpdatefileUrlInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGradingStatusFieldUpdateOperationsInput = {
    set?: $Enums.GradingStatus
  }

  export type AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    upsert?: AssignmentUpsertWithoutSubmissionsInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutSubmissionsInput, AssignmentUpdateWithoutSubmissionsInput>, AssignmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneRequiredWithoutSantriSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSantriSubmissionsInput, UserUncheckedCreateWithoutSantriSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantriSubmissionsInput
    upsert?: UserUpsertWithoutSantriSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSantriSubmissionsInput, UserUpdateWithoutSantriSubmissionsInput>, UserUncheckedUpdateWithoutSantriSubmissionsInput>
  }

  export type ClassCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendancesInput
    connect?: ClassWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSantriAttendancesInput = {
    create?: XOR<UserCreateWithoutSantriAttendancesInput, UserUncheckedCreateWithoutSantriAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantriAttendancesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMentorAttendancesInput = {
    create?: XOR<UserCreateWithoutMentorAttendancesInput, UserUncheckedCreateWithoutMentorAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorAttendancesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type ClassUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendancesInput
    upsert?: ClassUpsertWithoutAttendancesInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutAttendancesInput, ClassUpdateWithoutAttendancesInput>, ClassUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserUpdateOneRequiredWithoutSantriAttendancesNestedInput = {
    create?: XOR<UserCreateWithoutSantriAttendancesInput, UserUncheckedCreateWithoutSantriAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantriAttendancesInput
    upsert?: UserUpsertWithoutSantriAttendancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSantriAttendancesInput, UserUpdateWithoutSantriAttendancesInput>, UserUncheckedUpdateWithoutSantriAttendancesInput>
  }

  export type UserUpdateOneRequiredWithoutMentorAttendancesNestedInput = {
    create?: XOR<UserCreateWithoutMentorAttendancesInput, UserUncheckedCreateWithoutMentorAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorAttendancesInput
    upsert?: UserUpsertWithoutMentorAttendancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentorAttendancesInput, UserUpdateWithoutMentorAttendancesInput>, UserUncheckedUpdateWithoutMentorAttendancesInput>
  }

  export type DivisionCreateNestedOneWithoutClassesInput = {
    create?: XOR<DivisionCreateWithoutClassesInput, DivisionUncheckedCreateWithoutClassesInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutClassesInput
    connect?: DivisionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMentorClassesInput = {
    create?: XOR<UserCreateWithoutMentorClassesInput, UserUncheckedCreateWithoutMentorClassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorClassesInput
    connect?: UserWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutClassInput = {
    create?: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput> | AssignmentCreateWithoutClassInput[] | AssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClassInput | AssignmentCreateOrConnectWithoutClassInput[]
    createMany?: AssignmentCreateManyClassInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type SantriProfileCreateNestedManyWithoutClassInput = {
    create?: XOR<SantriProfileCreateWithoutClassInput, SantriProfileUncheckedCreateWithoutClassInput> | SantriProfileCreateWithoutClassInput[] | SantriProfileUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SantriProfileCreateOrConnectWithoutClassInput | SantriProfileCreateOrConnectWithoutClassInput[]
    createMany?: SantriProfileCreateManyClassInputEnvelope
    connect?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
  }

  export type DailyJournalCreateNestedManyWithoutClassInput = {
    create?: XOR<DailyJournalCreateWithoutClassInput, DailyJournalUncheckedCreateWithoutClassInput> | DailyJournalCreateWithoutClassInput[] | DailyJournalUncheckedCreateWithoutClassInput[]
    connectOrCreate?: DailyJournalCreateOrConnectWithoutClassInput | DailyJournalCreateOrConnectWithoutClassInput[]
    createMany?: DailyJournalCreateManyClassInputEnvelope
    connect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
  }

  export type MonthlyEvaluationCreateNestedManyWithoutClassInput = {
    create?: XOR<MonthlyEvaluationCreateWithoutClassInput, MonthlyEvaluationUncheckedCreateWithoutClassInput> | MonthlyEvaluationCreateWithoutClassInput[] | MonthlyEvaluationUncheckedCreateWithoutClassInput[]
    connectOrCreate?: MonthlyEvaluationCreateOrConnectWithoutClassInput | MonthlyEvaluationCreateOrConnectWithoutClassInput[]
    createMany?: MonthlyEvaluationCreateManyClassInputEnvelope
    connect?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput> | AssignmentCreateWithoutClassInput[] | AssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClassInput | AssignmentCreateOrConnectWithoutClassInput[]
    createMany?: AssignmentCreateManyClassInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type SantriProfileUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<SantriProfileCreateWithoutClassInput, SantriProfileUncheckedCreateWithoutClassInput> | SantriProfileCreateWithoutClassInput[] | SantriProfileUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SantriProfileCreateOrConnectWithoutClassInput | SantriProfileCreateOrConnectWithoutClassInput[]
    createMany?: SantriProfileCreateManyClassInputEnvelope
    connect?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
  }

  export type DailyJournalUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<DailyJournalCreateWithoutClassInput, DailyJournalUncheckedCreateWithoutClassInput> | DailyJournalCreateWithoutClassInput[] | DailyJournalUncheckedCreateWithoutClassInput[]
    connectOrCreate?: DailyJournalCreateOrConnectWithoutClassInput | DailyJournalCreateOrConnectWithoutClassInput[]
    createMany?: DailyJournalCreateManyClassInputEnvelope
    connect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
  }

  export type MonthlyEvaluationUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<MonthlyEvaluationCreateWithoutClassInput, MonthlyEvaluationUncheckedCreateWithoutClassInput> | MonthlyEvaluationCreateWithoutClassInput[] | MonthlyEvaluationUncheckedCreateWithoutClassInput[]
    connectOrCreate?: MonthlyEvaluationCreateOrConnectWithoutClassInput | MonthlyEvaluationCreateOrConnectWithoutClassInput[]
    createMany?: MonthlyEvaluationCreateManyClassInputEnvelope
    connect?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
  }

  export type DivisionUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<DivisionCreateWithoutClassesInput, DivisionUncheckedCreateWithoutClassesInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutClassesInput
    upsert?: DivisionUpsertWithoutClassesInput
    connect?: DivisionWhereUniqueInput
    update?: XOR<XOR<DivisionUpdateToOneWithWhereWithoutClassesInput, DivisionUpdateWithoutClassesInput>, DivisionUncheckedUpdateWithoutClassesInput>
  }

  export type UserUpdateOneRequiredWithoutMentorClassesNestedInput = {
    create?: XOR<UserCreateWithoutMentorClassesInput, UserUncheckedCreateWithoutMentorClassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorClassesInput
    upsert?: UserUpsertWithoutMentorClassesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentorClassesInput, UserUpdateWithoutMentorClassesInput>, UserUncheckedUpdateWithoutMentorClassesInput>
  }

  export type AttendanceUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassInput | AttendanceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassInput | AttendanceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassInput | AttendanceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutClassNestedInput = {
    create?: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput> | AssignmentCreateWithoutClassInput[] | AssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClassInput | AssignmentCreateOrConnectWithoutClassInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutClassInput | AssignmentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AssignmentCreateManyClassInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutClassInput | AssignmentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutClassInput | AssignmentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type SantriProfileUpdateManyWithoutClassNestedInput = {
    create?: XOR<SantriProfileCreateWithoutClassInput, SantriProfileUncheckedCreateWithoutClassInput> | SantriProfileCreateWithoutClassInput[] | SantriProfileUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SantriProfileCreateOrConnectWithoutClassInput | SantriProfileCreateOrConnectWithoutClassInput[]
    upsert?: SantriProfileUpsertWithWhereUniqueWithoutClassInput | SantriProfileUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: SantriProfileCreateManyClassInputEnvelope
    set?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    disconnect?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    delete?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    connect?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    update?: SantriProfileUpdateWithWhereUniqueWithoutClassInput | SantriProfileUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: SantriProfileUpdateManyWithWhereWithoutClassInput | SantriProfileUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: SantriProfileScalarWhereInput | SantriProfileScalarWhereInput[]
  }

  export type DailyJournalUpdateManyWithoutClassNestedInput = {
    create?: XOR<DailyJournalCreateWithoutClassInput, DailyJournalUncheckedCreateWithoutClassInput> | DailyJournalCreateWithoutClassInput[] | DailyJournalUncheckedCreateWithoutClassInput[]
    connectOrCreate?: DailyJournalCreateOrConnectWithoutClassInput | DailyJournalCreateOrConnectWithoutClassInput[]
    upsert?: DailyJournalUpsertWithWhereUniqueWithoutClassInput | DailyJournalUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: DailyJournalCreateManyClassInputEnvelope
    set?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    disconnect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    delete?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    connect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    update?: DailyJournalUpdateWithWhereUniqueWithoutClassInput | DailyJournalUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: DailyJournalUpdateManyWithWhereWithoutClassInput | DailyJournalUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: DailyJournalScalarWhereInput | DailyJournalScalarWhereInput[]
  }

  export type MonthlyEvaluationUpdateManyWithoutClassNestedInput = {
    create?: XOR<MonthlyEvaluationCreateWithoutClassInput, MonthlyEvaluationUncheckedCreateWithoutClassInput> | MonthlyEvaluationCreateWithoutClassInput[] | MonthlyEvaluationUncheckedCreateWithoutClassInput[]
    connectOrCreate?: MonthlyEvaluationCreateOrConnectWithoutClassInput | MonthlyEvaluationCreateOrConnectWithoutClassInput[]
    upsert?: MonthlyEvaluationUpsertWithWhereUniqueWithoutClassInput | MonthlyEvaluationUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: MonthlyEvaluationCreateManyClassInputEnvelope
    set?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    disconnect?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    delete?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    connect?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    update?: MonthlyEvaluationUpdateWithWhereUniqueWithoutClassInput | MonthlyEvaluationUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: MonthlyEvaluationUpdateManyWithWhereWithoutClassInput | MonthlyEvaluationUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: MonthlyEvaluationScalarWhereInput | MonthlyEvaluationScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassInput | AttendanceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassInput | AttendanceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassInput | AttendanceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput> | AssignmentCreateWithoutClassInput[] | AssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClassInput | AssignmentCreateOrConnectWithoutClassInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutClassInput | AssignmentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AssignmentCreateManyClassInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutClassInput | AssignmentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutClassInput | AssignmentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type SantriProfileUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<SantriProfileCreateWithoutClassInput, SantriProfileUncheckedCreateWithoutClassInput> | SantriProfileCreateWithoutClassInput[] | SantriProfileUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SantriProfileCreateOrConnectWithoutClassInput | SantriProfileCreateOrConnectWithoutClassInput[]
    upsert?: SantriProfileUpsertWithWhereUniqueWithoutClassInput | SantriProfileUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: SantriProfileCreateManyClassInputEnvelope
    set?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    disconnect?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    delete?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    connect?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    update?: SantriProfileUpdateWithWhereUniqueWithoutClassInput | SantriProfileUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: SantriProfileUpdateManyWithWhereWithoutClassInput | SantriProfileUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: SantriProfileScalarWhereInput | SantriProfileScalarWhereInput[]
  }

  export type DailyJournalUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<DailyJournalCreateWithoutClassInput, DailyJournalUncheckedCreateWithoutClassInput> | DailyJournalCreateWithoutClassInput[] | DailyJournalUncheckedCreateWithoutClassInput[]
    connectOrCreate?: DailyJournalCreateOrConnectWithoutClassInput | DailyJournalCreateOrConnectWithoutClassInput[]
    upsert?: DailyJournalUpsertWithWhereUniqueWithoutClassInput | DailyJournalUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: DailyJournalCreateManyClassInputEnvelope
    set?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    disconnect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    delete?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    connect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    update?: DailyJournalUpdateWithWhereUniqueWithoutClassInput | DailyJournalUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: DailyJournalUpdateManyWithWhereWithoutClassInput | DailyJournalUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: DailyJournalScalarWhereInput | DailyJournalScalarWhereInput[]
  }

  export type MonthlyEvaluationUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<MonthlyEvaluationCreateWithoutClassInput, MonthlyEvaluationUncheckedCreateWithoutClassInput> | MonthlyEvaluationCreateWithoutClassInput[] | MonthlyEvaluationUncheckedCreateWithoutClassInput[]
    connectOrCreate?: MonthlyEvaluationCreateOrConnectWithoutClassInput | MonthlyEvaluationCreateOrConnectWithoutClassInput[]
    upsert?: MonthlyEvaluationUpsertWithWhereUniqueWithoutClassInput | MonthlyEvaluationUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: MonthlyEvaluationCreateManyClassInputEnvelope
    set?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    disconnect?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    delete?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    connect?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    update?: MonthlyEvaluationUpdateWithWhereUniqueWithoutClassInput | MonthlyEvaluationUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: MonthlyEvaluationUpdateManyWithWhereWithoutClassInput | MonthlyEvaluationUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: MonthlyEvaluationScalarWhereInput | MonthlyEvaluationScalarWhereInput[]
  }

  export type ClassCreateNestedOneWithoutDailyJournalsInput = {
    create?: XOR<ClassCreateWithoutDailyJournalsInput, ClassUncheckedCreateWithoutDailyJournalsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutDailyJournalsInput
    connect?: ClassWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDailyJournalsInput = {
    create?: XOR<UserCreateWithoutDailyJournalsInput, UserUncheckedCreateWithoutDailyJournalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyJournalsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMentorDailyJournalsInput = {
    create?: XOR<UserCreateWithoutMentorDailyJournalsInput, UserUncheckedCreateWithoutMentorDailyJournalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorDailyJournalsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTugasTypeFieldUpdateOperationsInput = {
    set?: $Enums.TugasType
  }

  export type ClassUpdateOneRequiredWithoutDailyJournalsNestedInput = {
    create?: XOR<ClassCreateWithoutDailyJournalsInput, ClassUncheckedCreateWithoutDailyJournalsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutDailyJournalsInput
    upsert?: ClassUpsertWithoutDailyJournalsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutDailyJournalsInput, ClassUpdateWithoutDailyJournalsInput>, ClassUncheckedUpdateWithoutDailyJournalsInput>
  }

  export type UserUpdateOneRequiredWithoutDailyJournalsNestedInput = {
    create?: XOR<UserCreateWithoutDailyJournalsInput, UserUncheckedCreateWithoutDailyJournalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyJournalsInput
    upsert?: UserUpsertWithoutDailyJournalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyJournalsInput, UserUpdateWithoutDailyJournalsInput>, UserUncheckedUpdateWithoutDailyJournalsInput>
  }

  export type UserUpdateOneRequiredWithoutMentorDailyJournalsNestedInput = {
    create?: XOR<UserCreateWithoutMentorDailyJournalsInput, UserUncheckedCreateWithoutMentorDailyJournalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentorDailyJournalsInput
    upsert?: UserUpsertWithoutMentorDailyJournalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentorDailyJournalsInput, UserUpdateWithoutMentorDailyJournalsInput>, UserUncheckedUpdateWithoutMentorDailyJournalsInput>
  }

  export type ClassCreateNestedManyWithoutDivisionInput = {
    create?: XOR<ClassCreateWithoutDivisionInput, ClassUncheckedCreateWithoutDivisionInput> | ClassCreateWithoutDivisionInput[] | ClassUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutDivisionInput | ClassCreateOrConnectWithoutDivisionInput[]
    createMany?: ClassCreateManyDivisionInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutDivisionInput = {
    create?: XOR<ClassCreateWithoutDivisionInput, ClassUncheckedCreateWithoutDivisionInput> | ClassCreateWithoutDivisionInput[] | ClassUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutDivisionInput | ClassCreateOrConnectWithoutDivisionInput[]
    createMany?: ClassCreateManyDivisionInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<ClassCreateWithoutDivisionInput, ClassUncheckedCreateWithoutDivisionInput> | ClassCreateWithoutDivisionInput[] | ClassUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutDivisionInput | ClassCreateOrConnectWithoutDivisionInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutDivisionInput | ClassUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: ClassCreateManyDivisionInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutDivisionInput | ClassUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutDivisionInput | ClassUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<ClassCreateWithoutDivisionInput, ClassUncheckedCreateWithoutDivisionInput> | ClassCreateWithoutDivisionInput[] | ClassUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutDivisionInput | ClassCreateOrConnectWithoutDivisionInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutDivisionInput | ClassUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: ClassCreateManyDivisionInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutDivisionInput | ClassUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutDivisionInput | ClassUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMonthlyEvaluationsInput = {
    create?: XOR<UserCreateWithoutMonthlyEvaluationsInput, UserUncheckedCreateWithoutMonthlyEvaluationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonthlyEvaluationsInput
    connect?: UserWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutMonthlyEvaluationsInput = {
    create?: XOR<ClassCreateWithoutMonthlyEvaluationsInput, ClassUncheckedCreateWithoutMonthlyEvaluationsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutMonthlyEvaluationsInput
    connect?: ClassWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMonthlyEvaluationsNestedInput = {
    create?: XOR<UserCreateWithoutMonthlyEvaluationsInput, UserUncheckedCreateWithoutMonthlyEvaluationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonthlyEvaluationsInput
    upsert?: UserUpsertWithoutMonthlyEvaluationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMonthlyEvaluationsInput, UserUpdateWithoutMonthlyEvaluationsInput>, UserUncheckedUpdateWithoutMonthlyEvaluationsInput>
  }

  export type ClassUpdateOneRequiredWithoutMonthlyEvaluationsNestedInput = {
    create?: XOR<ClassCreateWithoutMonthlyEvaluationsInput, ClassUncheckedCreateWithoutMonthlyEvaluationsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutMonthlyEvaluationsInput
    upsert?: ClassUpsertWithoutMonthlyEvaluationsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutMonthlyEvaluationsInput, ClassUpdateWithoutMonthlyEvaluationsInput>, ClassUncheckedUpdateWithoutMonthlyEvaluationsInput>
  }

  export type UserCreateNestedOneWithoutSantriProfileInput = {
    create?: XOR<UserCreateWithoutSantriProfileInput, UserUncheckedCreateWithoutSantriProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantriProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutSantriProfilesInput = {
    create?: XOR<ClassCreateWithoutSantriProfilesInput, ClassUncheckedCreateWithoutSantriProfilesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSantriProfilesInput
    connect?: ClassWhereUniqueInput
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutSantriProfileNestedInput = {
    create?: XOR<UserCreateWithoutSantriProfileInput, UserUncheckedCreateWithoutSantriProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantriProfileInput
    upsert?: UserUpsertWithoutSantriProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSantriProfileInput, UserUpdateWithoutSantriProfileInput>, UserUncheckedUpdateWithoutSantriProfileInput>
  }

  export type ClassUpdateOneWithoutSantriProfilesNestedInput = {
    create?: XOR<ClassCreateWithoutSantriProfilesInput, ClassUncheckedCreateWithoutSantriProfilesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSantriProfilesInput
    upsert?: ClassUpsertWithoutSantriProfilesInput
    disconnect?: ClassWhereInput | boolean
    delete?: ClassWhereInput | boolean
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutSantriProfilesInput, ClassUpdateWithoutSantriProfilesInput>, ClassUncheckedUpdateWithoutSantriProfilesInput>
  }

  export type WaliProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<WaliProfileCreateWithoutUserInput, WaliProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WaliProfileCreateOrConnectWithoutUserInput
    connect?: WaliProfileWhereUniqueInput
  }

  export type VerificationCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
  }

  export type SantriProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<SantriProfileCreateWithoutUserInput, SantriProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SantriProfileCreateOrConnectWithoutUserInput
    connect?: SantriProfileWhereUniqueInput
  }

  export type ClassCreateNestedManyWithoutMentorInput = {
    create?: XOR<ClassCreateWithoutMentorInput, ClassUncheckedCreateWithoutMentorInput> | ClassCreateWithoutMentorInput[] | ClassUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutMentorInput | ClassCreateOrConnectWithoutMentorInput[]
    createMany?: ClassCreateManyMentorInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutMentorInput = {
    create?: XOR<AttendanceCreateWithoutMentorInput, AttendanceUncheckedCreateWithoutMentorInput> | AttendanceCreateWithoutMentorInput[] | AttendanceUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutMentorInput | AttendanceCreateOrConnectWithoutMentorInput[]
    createMany?: AttendanceCreateManyMentorInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutSantriInput = {
    create?: XOR<AttendanceCreateWithoutSantriInput, AttendanceUncheckedCreateWithoutSantriInput> | AttendanceCreateWithoutSantriInput[] | AttendanceUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSantriInput | AttendanceCreateOrConnectWithoutSantriInput[]
    createMany?: AttendanceCreateManySantriInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutMentorInput = {
    create?: XOR<AssignmentCreateWithoutMentorInput, AssignmentUncheckedCreateWithoutMentorInput> | AssignmentCreateWithoutMentorInput[] | AssignmentUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutMentorInput | AssignmentCreateOrConnectWithoutMentorInput[]
    createMany?: AssignmentCreateManyMentorInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AssignmentContentCreateNestedManyWithoutSantriInput = {
    create?: XOR<AssignmentContentCreateWithoutSantriInput, AssignmentContentUncheckedCreateWithoutSantriInput> | AssignmentContentCreateWithoutSantriInput[] | AssignmentContentUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutSantriInput | AssignmentContentCreateOrConnectWithoutSantriInput[]
    createMany?: AssignmentContentCreateManySantriInputEnvelope
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
  }

  export type WaliSantriRelationCreateNestedManyWithoutWaliInput = {
    create?: XOR<WaliSantriRelationCreateWithoutWaliInput, WaliSantriRelationUncheckedCreateWithoutWaliInput> | WaliSantriRelationCreateWithoutWaliInput[] | WaliSantriRelationUncheckedCreateWithoutWaliInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutWaliInput | WaliSantriRelationCreateOrConnectWithoutWaliInput[]
    createMany?: WaliSantriRelationCreateManyWaliInputEnvelope
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
  }

  export type WaliSantriRelationCreateNestedManyWithoutSantriInput = {
    create?: XOR<WaliSantriRelationCreateWithoutSantriInput, WaliSantriRelationUncheckedCreateWithoutSantriInput> | WaliSantriRelationCreateWithoutSantriInput[] | WaliSantriRelationUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutSantriInput | WaliSantriRelationCreateOrConnectWithoutSantriInput[]
    createMany?: WaliSantriRelationCreateManySantriInputEnvelope
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
  }

  export type DailyJournalCreateNestedManyWithoutSantriInput = {
    create?: XOR<DailyJournalCreateWithoutSantriInput, DailyJournalUncheckedCreateWithoutSantriInput> | DailyJournalCreateWithoutSantriInput[] | DailyJournalUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: DailyJournalCreateOrConnectWithoutSantriInput | DailyJournalCreateOrConnectWithoutSantriInput[]
    createMany?: DailyJournalCreateManySantriInputEnvelope
    connect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
  }

  export type DailyJournalCreateNestedManyWithoutMentorInput = {
    create?: XOR<DailyJournalCreateWithoutMentorInput, DailyJournalUncheckedCreateWithoutMentorInput> | DailyJournalCreateWithoutMentorInput[] | DailyJournalUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: DailyJournalCreateOrConnectWithoutMentorInput | DailyJournalCreateOrConnectWithoutMentorInput[]
    createMany?: DailyJournalCreateManyMentorInputEnvelope
    connect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
  }

  export type MonthlyEvaluationCreateNestedManyWithoutSantriInput = {
    create?: XOR<MonthlyEvaluationCreateWithoutSantriInput, MonthlyEvaluationUncheckedCreateWithoutSantriInput> | MonthlyEvaluationCreateWithoutSantriInput[] | MonthlyEvaluationUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: MonthlyEvaluationCreateOrConnectWithoutSantriInput | MonthlyEvaluationCreateOrConnectWithoutSantriInput[]
    createMany?: MonthlyEvaluationCreateManySantriInputEnvelope
    connect?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
  }

  export type WaliProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WaliProfileCreateWithoutUserInput, WaliProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WaliProfileCreateOrConnectWithoutUserInput
    connect?: WaliProfileWhereUniqueInput
  }

  export type VerificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
  }

  export type SantriProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SantriProfileCreateWithoutUserInput, SantriProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SantriProfileCreateOrConnectWithoutUserInput
    connect?: SantriProfileWhereUniqueInput
  }

  export type ClassUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<ClassCreateWithoutMentorInput, ClassUncheckedCreateWithoutMentorInput> | ClassCreateWithoutMentorInput[] | ClassUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutMentorInput | ClassCreateOrConnectWithoutMentorInput[]
    createMany?: ClassCreateManyMentorInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<AttendanceCreateWithoutMentorInput, AttendanceUncheckedCreateWithoutMentorInput> | AttendanceCreateWithoutMentorInput[] | AttendanceUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutMentorInput | AttendanceCreateOrConnectWithoutMentorInput[]
    createMany?: AttendanceCreateManyMentorInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutSantriInput = {
    create?: XOR<AttendanceCreateWithoutSantriInput, AttendanceUncheckedCreateWithoutSantriInput> | AttendanceCreateWithoutSantriInput[] | AttendanceUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSantriInput | AttendanceCreateOrConnectWithoutSantriInput[]
    createMany?: AttendanceCreateManySantriInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<AssignmentCreateWithoutMentorInput, AssignmentUncheckedCreateWithoutMentorInput> | AssignmentCreateWithoutMentorInput[] | AssignmentUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutMentorInput | AssignmentCreateOrConnectWithoutMentorInput[]
    createMany?: AssignmentCreateManyMentorInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AssignmentContentUncheckedCreateNestedManyWithoutSantriInput = {
    create?: XOR<AssignmentContentCreateWithoutSantriInput, AssignmentContentUncheckedCreateWithoutSantriInput> | AssignmentContentCreateWithoutSantriInput[] | AssignmentContentUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutSantriInput | AssignmentContentCreateOrConnectWithoutSantriInput[]
    createMany?: AssignmentContentCreateManySantriInputEnvelope
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
  }

  export type WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput = {
    create?: XOR<WaliSantriRelationCreateWithoutWaliInput, WaliSantriRelationUncheckedCreateWithoutWaliInput> | WaliSantriRelationCreateWithoutWaliInput[] | WaliSantriRelationUncheckedCreateWithoutWaliInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutWaliInput | WaliSantriRelationCreateOrConnectWithoutWaliInput[]
    createMany?: WaliSantriRelationCreateManyWaliInputEnvelope
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
  }

  export type WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput = {
    create?: XOR<WaliSantriRelationCreateWithoutSantriInput, WaliSantriRelationUncheckedCreateWithoutSantriInput> | WaliSantriRelationCreateWithoutSantriInput[] | WaliSantriRelationUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutSantriInput | WaliSantriRelationCreateOrConnectWithoutSantriInput[]
    createMany?: WaliSantriRelationCreateManySantriInputEnvelope
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
  }

  export type DailyJournalUncheckedCreateNestedManyWithoutSantriInput = {
    create?: XOR<DailyJournalCreateWithoutSantriInput, DailyJournalUncheckedCreateWithoutSantriInput> | DailyJournalCreateWithoutSantriInput[] | DailyJournalUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: DailyJournalCreateOrConnectWithoutSantriInput | DailyJournalCreateOrConnectWithoutSantriInput[]
    createMany?: DailyJournalCreateManySantriInputEnvelope
    connect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
  }

  export type DailyJournalUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<DailyJournalCreateWithoutMentorInput, DailyJournalUncheckedCreateWithoutMentorInput> | DailyJournalCreateWithoutMentorInput[] | DailyJournalUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: DailyJournalCreateOrConnectWithoutMentorInput | DailyJournalCreateOrConnectWithoutMentorInput[]
    createMany?: DailyJournalCreateManyMentorInputEnvelope
    connect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
  }

  export type MonthlyEvaluationUncheckedCreateNestedManyWithoutSantriInput = {
    create?: XOR<MonthlyEvaluationCreateWithoutSantriInput, MonthlyEvaluationUncheckedCreateWithoutSantriInput> | MonthlyEvaluationCreateWithoutSantriInput[] | MonthlyEvaluationUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: MonthlyEvaluationCreateOrConnectWithoutSantriInput | MonthlyEvaluationCreateOrConnectWithoutSantriInput[]
    createMany?: MonthlyEvaluationCreateManySantriInputEnvelope
    connect?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WaliProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<WaliProfileCreateWithoutUserInput, WaliProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WaliProfileCreateOrConnectWithoutUserInput
    upsert?: WaliProfileUpsertWithoutUserInput
    disconnect?: WaliProfileWhereInput | boolean
    delete?: WaliProfileWhereInput | boolean
    connect?: WaliProfileWhereUniqueInput
    update?: XOR<XOR<WaliProfileUpdateToOneWithWhereWithoutUserInput, WaliProfileUpdateWithoutUserInput>, WaliProfileUncheckedUpdateWithoutUserInput>
  }

  export type VerificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    upsert?: VerificationUpsertWithWhereUniqueWithoutUserInput | VerificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    set?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    disconnect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    delete?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    update?: VerificationUpdateWithWhereUniqueWithoutUserInput | VerificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationUpdateManyWithWhereWithoutUserInput | VerificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
  }

  export type SantriProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<SantriProfileCreateWithoutUserInput, SantriProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SantriProfileCreateOrConnectWithoutUserInput
    upsert?: SantriProfileUpsertWithoutUserInput
    disconnect?: SantriProfileWhereInput | boolean
    delete?: SantriProfileWhereInput | boolean
    connect?: SantriProfileWhereUniqueInput
    update?: XOR<XOR<SantriProfileUpdateToOneWithWhereWithoutUserInput, SantriProfileUpdateWithoutUserInput>, SantriProfileUncheckedUpdateWithoutUserInput>
  }

  export type ClassUpdateManyWithoutMentorNestedInput = {
    create?: XOR<ClassCreateWithoutMentorInput, ClassUncheckedCreateWithoutMentorInput> | ClassCreateWithoutMentorInput[] | ClassUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutMentorInput | ClassCreateOrConnectWithoutMentorInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutMentorInput | ClassUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: ClassCreateManyMentorInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutMentorInput | ClassUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutMentorInput | ClassUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutMentorNestedInput = {
    create?: XOR<AttendanceCreateWithoutMentorInput, AttendanceUncheckedCreateWithoutMentorInput> | AttendanceCreateWithoutMentorInput[] | AttendanceUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutMentorInput | AttendanceCreateOrConnectWithoutMentorInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutMentorInput | AttendanceUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: AttendanceCreateManyMentorInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutMentorInput | AttendanceUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutMentorInput | AttendanceUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutSantriNestedInput = {
    create?: XOR<AttendanceCreateWithoutSantriInput, AttendanceUncheckedCreateWithoutSantriInput> | AttendanceCreateWithoutSantriInput[] | AttendanceUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSantriInput | AttendanceCreateOrConnectWithoutSantriInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutSantriInput | AttendanceUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: AttendanceCreateManySantriInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutSantriInput | AttendanceUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutSantriInput | AttendanceUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutMentorNestedInput = {
    create?: XOR<AssignmentCreateWithoutMentorInput, AssignmentUncheckedCreateWithoutMentorInput> | AssignmentCreateWithoutMentorInput[] | AssignmentUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutMentorInput | AssignmentCreateOrConnectWithoutMentorInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutMentorInput | AssignmentUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: AssignmentCreateManyMentorInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutMentorInput | AssignmentUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutMentorInput | AssignmentUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AssignmentContentUpdateManyWithoutSantriNestedInput = {
    create?: XOR<AssignmentContentCreateWithoutSantriInput, AssignmentContentUncheckedCreateWithoutSantriInput> | AssignmentContentCreateWithoutSantriInput[] | AssignmentContentUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutSantriInput | AssignmentContentCreateOrConnectWithoutSantriInput[]
    upsert?: AssignmentContentUpsertWithWhereUniqueWithoutSantriInput | AssignmentContentUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: AssignmentContentCreateManySantriInputEnvelope
    set?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    disconnect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    delete?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    update?: AssignmentContentUpdateWithWhereUniqueWithoutSantriInput | AssignmentContentUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: AssignmentContentUpdateManyWithWhereWithoutSantriInput | AssignmentContentUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: AssignmentContentScalarWhereInput | AssignmentContentScalarWhereInput[]
  }

  export type WaliSantriRelationUpdateManyWithoutWaliNestedInput = {
    create?: XOR<WaliSantriRelationCreateWithoutWaliInput, WaliSantriRelationUncheckedCreateWithoutWaliInput> | WaliSantriRelationCreateWithoutWaliInput[] | WaliSantriRelationUncheckedCreateWithoutWaliInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutWaliInput | WaliSantriRelationCreateOrConnectWithoutWaliInput[]
    upsert?: WaliSantriRelationUpsertWithWhereUniqueWithoutWaliInput | WaliSantriRelationUpsertWithWhereUniqueWithoutWaliInput[]
    createMany?: WaliSantriRelationCreateManyWaliInputEnvelope
    set?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    disconnect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    delete?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    update?: WaliSantriRelationUpdateWithWhereUniqueWithoutWaliInput | WaliSantriRelationUpdateWithWhereUniqueWithoutWaliInput[]
    updateMany?: WaliSantriRelationUpdateManyWithWhereWithoutWaliInput | WaliSantriRelationUpdateManyWithWhereWithoutWaliInput[]
    deleteMany?: WaliSantriRelationScalarWhereInput | WaliSantriRelationScalarWhereInput[]
  }

  export type WaliSantriRelationUpdateManyWithoutSantriNestedInput = {
    create?: XOR<WaliSantriRelationCreateWithoutSantriInput, WaliSantriRelationUncheckedCreateWithoutSantriInput> | WaliSantriRelationCreateWithoutSantriInput[] | WaliSantriRelationUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutSantriInput | WaliSantriRelationCreateOrConnectWithoutSantriInput[]
    upsert?: WaliSantriRelationUpsertWithWhereUniqueWithoutSantriInput | WaliSantriRelationUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: WaliSantriRelationCreateManySantriInputEnvelope
    set?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    disconnect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    delete?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    update?: WaliSantriRelationUpdateWithWhereUniqueWithoutSantriInput | WaliSantriRelationUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: WaliSantriRelationUpdateManyWithWhereWithoutSantriInput | WaliSantriRelationUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: WaliSantriRelationScalarWhereInput | WaliSantriRelationScalarWhereInput[]
  }

  export type DailyJournalUpdateManyWithoutSantriNestedInput = {
    create?: XOR<DailyJournalCreateWithoutSantriInput, DailyJournalUncheckedCreateWithoutSantriInput> | DailyJournalCreateWithoutSantriInput[] | DailyJournalUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: DailyJournalCreateOrConnectWithoutSantriInput | DailyJournalCreateOrConnectWithoutSantriInput[]
    upsert?: DailyJournalUpsertWithWhereUniqueWithoutSantriInput | DailyJournalUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: DailyJournalCreateManySantriInputEnvelope
    set?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    disconnect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    delete?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    connect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    update?: DailyJournalUpdateWithWhereUniqueWithoutSantriInput | DailyJournalUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: DailyJournalUpdateManyWithWhereWithoutSantriInput | DailyJournalUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: DailyJournalScalarWhereInput | DailyJournalScalarWhereInput[]
  }

  export type DailyJournalUpdateManyWithoutMentorNestedInput = {
    create?: XOR<DailyJournalCreateWithoutMentorInput, DailyJournalUncheckedCreateWithoutMentorInput> | DailyJournalCreateWithoutMentorInput[] | DailyJournalUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: DailyJournalCreateOrConnectWithoutMentorInput | DailyJournalCreateOrConnectWithoutMentorInput[]
    upsert?: DailyJournalUpsertWithWhereUniqueWithoutMentorInput | DailyJournalUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: DailyJournalCreateManyMentorInputEnvelope
    set?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    disconnect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    delete?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    connect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    update?: DailyJournalUpdateWithWhereUniqueWithoutMentorInput | DailyJournalUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: DailyJournalUpdateManyWithWhereWithoutMentorInput | DailyJournalUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: DailyJournalScalarWhereInput | DailyJournalScalarWhereInput[]
  }

  export type MonthlyEvaluationUpdateManyWithoutSantriNestedInput = {
    create?: XOR<MonthlyEvaluationCreateWithoutSantriInput, MonthlyEvaluationUncheckedCreateWithoutSantriInput> | MonthlyEvaluationCreateWithoutSantriInput[] | MonthlyEvaluationUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: MonthlyEvaluationCreateOrConnectWithoutSantriInput | MonthlyEvaluationCreateOrConnectWithoutSantriInput[]
    upsert?: MonthlyEvaluationUpsertWithWhereUniqueWithoutSantriInput | MonthlyEvaluationUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: MonthlyEvaluationCreateManySantriInputEnvelope
    set?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    disconnect?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    delete?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    connect?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    update?: MonthlyEvaluationUpdateWithWhereUniqueWithoutSantriInput | MonthlyEvaluationUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: MonthlyEvaluationUpdateManyWithWhereWithoutSantriInput | MonthlyEvaluationUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: MonthlyEvaluationScalarWhereInput | MonthlyEvaluationScalarWhereInput[]
  }

  export type WaliProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WaliProfileCreateWithoutUserInput, WaliProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WaliProfileCreateOrConnectWithoutUserInput
    upsert?: WaliProfileUpsertWithoutUserInput
    disconnect?: WaliProfileWhereInput | boolean
    delete?: WaliProfileWhereInput | boolean
    connect?: WaliProfileWhereUniqueInput
    update?: XOR<XOR<WaliProfileUpdateToOneWithWhereWithoutUserInput, WaliProfileUpdateWithoutUserInput>, WaliProfileUncheckedUpdateWithoutUserInput>
  }

  export type VerificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    upsert?: VerificationUpsertWithWhereUniqueWithoutUserInput | VerificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    set?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    disconnect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    delete?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    update?: VerificationUpdateWithWhereUniqueWithoutUserInput | VerificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationUpdateManyWithWhereWithoutUserInput | VerificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
  }

  export type SantriProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SantriProfileCreateWithoutUserInput, SantriProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SantriProfileCreateOrConnectWithoutUserInput
    upsert?: SantriProfileUpsertWithoutUserInput
    disconnect?: SantriProfileWhereInput | boolean
    delete?: SantriProfileWhereInput | boolean
    connect?: SantriProfileWhereUniqueInput
    update?: XOR<XOR<SantriProfileUpdateToOneWithWhereWithoutUserInput, SantriProfileUpdateWithoutUserInput>, SantriProfileUncheckedUpdateWithoutUserInput>
  }

  export type ClassUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<ClassCreateWithoutMentorInput, ClassUncheckedCreateWithoutMentorInput> | ClassCreateWithoutMentorInput[] | ClassUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutMentorInput | ClassCreateOrConnectWithoutMentorInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutMentorInput | ClassUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: ClassCreateManyMentorInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutMentorInput | ClassUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutMentorInput | ClassUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<AttendanceCreateWithoutMentorInput, AttendanceUncheckedCreateWithoutMentorInput> | AttendanceCreateWithoutMentorInput[] | AttendanceUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutMentorInput | AttendanceCreateOrConnectWithoutMentorInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutMentorInput | AttendanceUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: AttendanceCreateManyMentorInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutMentorInput | AttendanceUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutMentorInput | AttendanceUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutSantriNestedInput = {
    create?: XOR<AttendanceCreateWithoutSantriInput, AttendanceUncheckedCreateWithoutSantriInput> | AttendanceCreateWithoutSantriInput[] | AttendanceUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSantriInput | AttendanceCreateOrConnectWithoutSantriInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutSantriInput | AttendanceUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: AttendanceCreateManySantriInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutSantriInput | AttendanceUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutSantriInput | AttendanceUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<AssignmentCreateWithoutMentorInput, AssignmentUncheckedCreateWithoutMentorInput> | AssignmentCreateWithoutMentorInput[] | AssignmentUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutMentorInput | AssignmentCreateOrConnectWithoutMentorInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutMentorInput | AssignmentUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: AssignmentCreateManyMentorInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutMentorInput | AssignmentUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutMentorInput | AssignmentUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput = {
    create?: XOR<AssignmentContentCreateWithoutSantriInput, AssignmentContentUncheckedCreateWithoutSantriInput> | AssignmentContentCreateWithoutSantriInput[] | AssignmentContentUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutSantriInput | AssignmentContentCreateOrConnectWithoutSantriInput[]
    upsert?: AssignmentContentUpsertWithWhereUniqueWithoutSantriInput | AssignmentContentUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: AssignmentContentCreateManySantriInputEnvelope
    set?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    disconnect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    delete?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    update?: AssignmentContentUpdateWithWhereUniqueWithoutSantriInput | AssignmentContentUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: AssignmentContentUpdateManyWithWhereWithoutSantriInput | AssignmentContentUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: AssignmentContentScalarWhereInput | AssignmentContentScalarWhereInput[]
  }

  export type WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput = {
    create?: XOR<WaliSantriRelationCreateWithoutWaliInput, WaliSantriRelationUncheckedCreateWithoutWaliInput> | WaliSantriRelationCreateWithoutWaliInput[] | WaliSantriRelationUncheckedCreateWithoutWaliInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutWaliInput | WaliSantriRelationCreateOrConnectWithoutWaliInput[]
    upsert?: WaliSantriRelationUpsertWithWhereUniqueWithoutWaliInput | WaliSantriRelationUpsertWithWhereUniqueWithoutWaliInput[]
    createMany?: WaliSantriRelationCreateManyWaliInputEnvelope
    set?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    disconnect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    delete?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    update?: WaliSantriRelationUpdateWithWhereUniqueWithoutWaliInput | WaliSantriRelationUpdateWithWhereUniqueWithoutWaliInput[]
    updateMany?: WaliSantriRelationUpdateManyWithWhereWithoutWaliInput | WaliSantriRelationUpdateManyWithWhereWithoutWaliInput[]
    deleteMany?: WaliSantriRelationScalarWhereInput | WaliSantriRelationScalarWhereInput[]
  }

  export type WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput = {
    create?: XOR<WaliSantriRelationCreateWithoutSantriInput, WaliSantriRelationUncheckedCreateWithoutSantriInput> | WaliSantriRelationCreateWithoutSantriInput[] | WaliSantriRelationUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutSantriInput | WaliSantriRelationCreateOrConnectWithoutSantriInput[]
    upsert?: WaliSantriRelationUpsertWithWhereUniqueWithoutSantriInput | WaliSantriRelationUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: WaliSantriRelationCreateManySantriInputEnvelope
    set?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    disconnect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    delete?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    update?: WaliSantriRelationUpdateWithWhereUniqueWithoutSantriInput | WaliSantriRelationUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: WaliSantriRelationUpdateManyWithWhereWithoutSantriInput | WaliSantriRelationUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: WaliSantriRelationScalarWhereInput | WaliSantriRelationScalarWhereInput[]
  }

  export type DailyJournalUncheckedUpdateManyWithoutSantriNestedInput = {
    create?: XOR<DailyJournalCreateWithoutSantriInput, DailyJournalUncheckedCreateWithoutSantriInput> | DailyJournalCreateWithoutSantriInput[] | DailyJournalUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: DailyJournalCreateOrConnectWithoutSantriInput | DailyJournalCreateOrConnectWithoutSantriInput[]
    upsert?: DailyJournalUpsertWithWhereUniqueWithoutSantriInput | DailyJournalUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: DailyJournalCreateManySantriInputEnvelope
    set?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    disconnect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    delete?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    connect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    update?: DailyJournalUpdateWithWhereUniqueWithoutSantriInput | DailyJournalUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: DailyJournalUpdateManyWithWhereWithoutSantriInput | DailyJournalUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: DailyJournalScalarWhereInput | DailyJournalScalarWhereInput[]
  }

  export type DailyJournalUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<DailyJournalCreateWithoutMentorInput, DailyJournalUncheckedCreateWithoutMentorInput> | DailyJournalCreateWithoutMentorInput[] | DailyJournalUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: DailyJournalCreateOrConnectWithoutMentorInput | DailyJournalCreateOrConnectWithoutMentorInput[]
    upsert?: DailyJournalUpsertWithWhereUniqueWithoutMentorInput | DailyJournalUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: DailyJournalCreateManyMentorInputEnvelope
    set?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    disconnect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    delete?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    connect?: DailyJournalWhereUniqueInput | DailyJournalWhereUniqueInput[]
    update?: DailyJournalUpdateWithWhereUniqueWithoutMentorInput | DailyJournalUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: DailyJournalUpdateManyWithWhereWithoutMentorInput | DailyJournalUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: DailyJournalScalarWhereInput | DailyJournalScalarWhereInput[]
  }

  export type MonthlyEvaluationUncheckedUpdateManyWithoutSantriNestedInput = {
    create?: XOR<MonthlyEvaluationCreateWithoutSantriInput, MonthlyEvaluationUncheckedCreateWithoutSantriInput> | MonthlyEvaluationCreateWithoutSantriInput[] | MonthlyEvaluationUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: MonthlyEvaluationCreateOrConnectWithoutSantriInput | MonthlyEvaluationCreateOrConnectWithoutSantriInput[]
    upsert?: MonthlyEvaluationUpsertWithWhereUniqueWithoutSantriInput | MonthlyEvaluationUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: MonthlyEvaluationCreateManySantriInputEnvelope
    set?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    disconnect?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    delete?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    connect?: MonthlyEvaluationWhereUniqueInput | MonthlyEvaluationWhereUniqueInput[]
    update?: MonthlyEvaluationUpdateWithWhereUniqueWithoutSantriInput | MonthlyEvaluationUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: MonthlyEvaluationUpdateManyWithWhereWithoutSantriInput | MonthlyEvaluationUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: MonthlyEvaluationScalarWhereInput | MonthlyEvaluationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWaliProfileInput = {
    create?: XOR<UserCreateWithoutWaliProfileInput, UserUncheckedCreateWithoutWaliProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutWaliProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWaliProfileNestedInput = {
    create?: XOR<UserCreateWithoutWaliProfileInput, UserUncheckedCreateWithoutWaliProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutWaliProfileInput
    upsert?: UserUpsertWithoutWaliProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWaliProfileInput, UserUpdateWithoutWaliProfileInput>, UserUncheckedUpdateWithoutWaliProfileInput>
  }

  export type UserCreateNestedOneWithoutWaliRelationsInput = {
    create?: XOR<UserCreateWithoutWaliRelationsInput, UserUncheckedCreateWithoutWaliRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWaliRelationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSantriRelationsInput = {
    create?: XOR<UserCreateWithoutSantriRelationsInput, UserUncheckedCreateWithoutSantriRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantriRelationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumWaliSantriCategoryFieldUpdateOperationsInput = {
    set?: $Enums.WaliSantriCategory
  }

  export type UserUpdateOneRequiredWithoutWaliRelationsNestedInput = {
    create?: XOR<UserCreateWithoutWaliRelationsInput, UserUncheckedCreateWithoutWaliRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWaliRelationsInput
    upsert?: UserUpsertWithoutWaliRelationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWaliRelationsInput, UserUpdateWithoutWaliRelationsInput>, UserUncheckedUpdateWithoutWaliRelationsInput>
  }

  export type UserUpdateOneRequiredWithoutSantriRelationsNestedInput = {
    create?: XOR<UserCreateWithoutSantriRelationsInput, UserUncheckedCreateWithoutSantriRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantriRelationsInput
    upsert?: UserUpsertWithoutSantriRelationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSantriRelationsInput, UserUpdateWithoutSantriRelationsInput>, UserUncheckedUpdateWithoutSantriRelationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSubmissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionType | EnumSubmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionTypeFilter<$PrismaModel> | $Enums.SubmissionType
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSubmissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionType | EnumSubmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubmissionTypeFilter<$PrismaModel>
  }

  export type NestedEnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type NestedEnumGradingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GradingStatus | EnumGradingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradingStatusFilter<$PrismaModel> | $Enums.GradingStatus
  }

  export type NestedEnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGradingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GradingStatus | EnumGradingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradingStatusWithAggregatesFilter<$PrismaModel> | $Enums.GradingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradingStatusFilter<$PrismaModel>
    _max?: NestedEnumGradingStatusFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTugasTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TugasType | EnumTugasTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TugasType[] | ListEnumTugasTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TugasType[] | ListEnumTugasTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTugasTypeFilter<$PrismaModel> | $Enums.TugasType
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedEnumTugasTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TugasType | EnumTugasTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TugasType[] | ListEnumTugasTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TugasType[] | ListEnumTugasTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTugasTypeWithAggregatesFilter<$PrismaModel> | $Enums.TugasType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTugasTypeFilter<$PrismaModel>
    _max?: NestedEnumTugasTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumWaliSantriCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.WaliSantriCategory | EnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWaliSantriCategoryFilter<$PrismaModel> | $Enums.WaliSantriCategory
  }

  export type NestedEnumWaliSantriCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WaliSantriCategory | EnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWaliSantriCategoryWithAggregatesFilter<$PrismaModel> | $Enums.WaliSantriCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWaliSantriCategoryFilter<$PrismaModel>
    _max?: NestedEnumWaliSantriCategoryFilter<$PrismaModel>
  }

  export type UserCreateWithoutVerificationsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileCreateNestedOneWithoutUserInput
    santriProfile?: SantriProfileCreateNestedOneWithoutUserInput
    mentorClasses?: ClassCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutVerificationsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileUncheckedCreateNestedOneWithoutUserInput
    santriProfile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentorClasses?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutVerificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
  }

  export type UserUpsertWithoutVerificationsInput = {
    update: XOR<UserUpdateWithoutVerificationsInput, UserUncheckedUpdateWithoutVerificationsInput>
    create: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationsInput, UserUncheckedUpdateWithoutVerificationsInput>
  }

  export type UserUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUpdateOneWithoutUserNestedInput
    santriProfile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUncheckedUpdateOneWithoutUserNestedInput
    santriProfile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUncheckedUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type ClassCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    division: DivisionCreateNestedOneWithoutClassesInput
    mentor: UserCreateNestedOneWithoutMentorClassesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
    santriProfiles?: SantriProfileCreateNestedManyWithoutClassInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutClassInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    divisiId: string
    name: string
    mentorId: string
    createdAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    santriProfiles?: SantriProfileUncheckedCreateNestedManyWithoutClassInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutClassInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutAssignmentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutAssignmentsInput, ClassUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutMentorAssignmentsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileCreateNestedOneWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileCreateNestedOneWithoutUserInput
    mentorClasses?: ClassCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceCreateNestedManyWithoutSantriInput
    santriSubmissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutMentorAssignmentsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileUncheckedCreateNestedOneWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentorClasses?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    santriSubmissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutMentorAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentorAssignmentsInput, UserUncheckedCreateWithoutMentorAssignmentsInput>
  }

  export type AssignmentContentCreateWithoutAssignmentInput = {
    id?: string
    contentType: $Enums.ContentType
    fileUrl?: AssignmentContentCreatefileUrlInput | string[]
    score?: number | null
    mentorFeedback?: string | null
    status?: $Enums.GradingStatus
    submittedAt?: Date | string
    santri: UserCreateNestedOneWithoutSantriSubmissionsInput
  }

  export type AssignmentContentUncheckedCreateWithoutAssignmentInput = {
    id?: string
    santriId: string
    contentType: $Enums.ContentType
    fileUrl?: AssignmentContentCreatefileUrlInput | string[]
    score?: number | null
    mentorFeedback?: string | null
    status?: $Enums.GradingStatus
    submittedAt?: Date | string
  }

  export type AssignmentContentCreateOrConnectWithoutAssignmentInput = {
    where: AssignmentContentWhereUniqueInput
    create: XOR<AssignmentContentCreateWithoutAssignmentInput, AssignmentContentUncheckedCreateWithoutAssignmentInput>
  }

  export type AssignmentContentCreateManyAssignmentInputEnvelope = {
    data: AssignmentContentCreateManyAssignmentInput | AssignmentContentCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutAssignmentsInput = {
    update: XOR<ClassUpdateWithoutAssignmentsInput, ClassUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<ClassCreateWithoutAssignmentsInput, ClassUncheckedCreateWithoutAssignmentsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutAssignmentsInput, ClassUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ClassUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    division?: DivisionUpdateOneRequiredWithoutClassesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentorClassesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
    santriProfiles?: SantriProfileUpdateManyWithoutClassNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutClassNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    divisiId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    santriProfiles?: SantriProfileUncheckedUpdateManyWithoutClassNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutClassNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UserUpsertWithoutMentorAssignmentsInput = {
    update: XOR<UserUpdateWithoutMentorAssignmentsInput, UserUncheckedUpdateWithoutMentorAssignmentsInput>
    create: XOR<UserCreateWithoutMentorAssignmentsInput, UserUncheckedCreateWithoutMentorAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMentorAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMentorAssignmentsInput, UserUncheckedUpdateWithoutMentorAssignmentsInput>
  }

  export type UserUpdateWithoutMentorAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUpdateOneWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUpdateManyWithoutSantriNestedInput
    santriSubmissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutMentorAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUncheckedUpdateOneWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    santriSubmissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUncheckedUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type AssignmentContentUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: AssignmentContentWhereUniqueInput
    update: XOR<AssignmentContentUpdateWithoutAssignmentInput, AssignmentContentUncheckedUpdateWithoutAssignmentInput>
    create: XOR<AssignmentContentCreateWithoutAssignmentInput, AssignmentContentUncheckedCreateWithoutAssignmentInput>
  }

  export type AssignmentContentUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: AssignmentContentWhereUniqueInput
    data: XOR<AssignmentContentUpdateWithoutAssignmentInput, AssignmentContentUncheckedUpdateWithoutAssignmentInput>
  }

  export type AssignmentContentUpdateManyWithWhereWithoutAssignmentInput = {
    where: AssignmentContentScalarWhereInput
    data: XOR<AssignmentContentUpdateManyMutationInput, AssignmentContentUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type AssignmentContentScalarWhereInput = {
    AND?: AssignmentContentScalarWhereInput | AssignmentContentScalarWhereInput[]
    OR?: AssignmentContentScalarWhereInput[]
    NOT?: AssignmentContentScalarWhereInput | AssignmentContentScalarWhereInput[]
    id?: StringFilter<"AssignmentContent"> | string
    assignmentId?: StringFilter<"AssignmentContent"> | string
    santriId?: StringFilter<"AssignmentContent"> | string
    contentType?: EnumContentTypeFilter<"AssignmentContent"> | $Enums.ContentType
    fileUrl?: StringNullableListFilter<"AssignmentContent">
    score?: IntNullableFilter<"AssignmentContent"> | number | null
    mentorFeedback?: StringNullableFilter<"AssignmentContent"> | string | null
    status?: EnumGradingStatusFilter<"AssignmentContent"> | $Enums.GradingStatus
    submittedAt?: DateTimeFilter<"AssignmentContent"> | Date | string
  }

  export type AssignmentCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description?: string | null
    submissionType: $Enums.SubmissionType
    attachmentUrl?: string | null
    due_date: Date | string
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutAssignmentsInput
    mentor: UserCreateNestedOneWithoutMentorAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    classId: string
    mentorId: string
    title: string
    description?: string | null
    submissionType: $Enums.SubmissionType
    attachmentUrl?: string | null
    due_date: Date | string
    createdAt?: Date | string
  }

  export type AssignmentCreateOrConnectWithoutSubmissionsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutSantriSubmissionsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileCreateNestedOneWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileCreateNestedOneWithoutUserInput
    mentorClasses?: ClassCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentCreateNestedManyWithoutMentorInput
    waliRelations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutSantriSubmissionsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileUncheckedCreateNestedOneWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentorClasses?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    waliRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutSantriSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSantriSubmissionsInput, UserUncheckedCreateWithoutSantriSubmissionsInput>
  }

  export type AssignmentUpsertWithoutSubmissionsInput = {
    update: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type AssignmentUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submissionType?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAssignmentsNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentorAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submissionType?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSantriSubmissionsInput = {
    update: XOR<UserUpdateWithoutSantriSubmissionsInput, UserUncheckedUpdateWithoutSantriSubmissionsInput>
    create: XOR<UserCreateWithoutSantriSubmissionsInput, UserUncheckedCreateWithoutSantriSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSantriSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSantriSubmissionsInput, UserUncheckedUpdateWithoutSantriSubmissionsInput>
  }

  export type UserUpdateWithoutSantriSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUpdateOneWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUpdateManyWithoutMentorNestedInput
    waliRelations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutSantriSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUncheckedUpdateOneWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    waliRelations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUncheckedUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type ClassCreateWithoutAttendancesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    division: DivisionCreateNestedOneWithoutClassesInput
    mentor: UserCreateNestedOneWithoutMentorClassesInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    santriProfiles?: SantriProfileCreateNestedManyWithoutClassInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutClassInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutAttendancesInput = {
    id?: string
    divisiId: string
    name: string
    mentorId: string
    createdAt?: Date | string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    santriProfiles?: SantriProfileUncheckedCreateNestedManyWithoutClassInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutClassInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutAttendancesInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
  }

  export type UserCreateWithoutSantriAttendancesInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileCreateNestedOneWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileCreateNestedOneWithoutUserInput
    mentorClasses?: ClassCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceCreateNestedManyWithoutMentorInput
    mentorAssignments?: AssignmentCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutSantriAttendancesInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileUncheckedCreateNestedOneWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentorClasses?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    mentorAssignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutSantriAttendancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSantriAttendancesInput, UserUncheckedCreateWithoutSantriAttendancesInput>
  }

  export type UserCreateWithoutMentorAttendancesInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileCreateNestedOneWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileCreateNestedOneWithoutUserInput
    mentorClasses?: ClassCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutMentorAttendancesInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileUncheckedCreateNestedOneWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentorClasses?: ClassUncheckedCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutMentorAttendancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentorAttendancesInput, UserUncheckedCreateWithoutMentorAttendancesInput>
  }

  export type ClassUpsertWithoutAttendancesInput = {
    update: XOR<ClassUpdateWithoutAttendancesInput, ClassUncheckedUpdateWithoutAttendancesInput>
    create: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutAttendancesInput, ClassUncheckedUpdateWithoutAttendancesInput>
  }

  export type ClassUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    division?: DivisionUpdateOneRequiredWithoutClassesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentorClassesNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    santriProfiles?: SantriProfileUpdateManyWithoutClassNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutClassNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    divisiId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    santriProfiles?: SantriProfileUncheckedUpdateManyWithoutClassNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutClassNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UserUpsertWithoutSantriAttendancesInput = {
    update: XOR<UserUpdateWithoutSantriAttendancesInput, UserUncheckedUpdateWithoutSantriAttendancesInput>
    create: XOR<UserCreateWithoutSantriAttendancesInput, UserUncheckedCreateWithoutSantriAttendancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSantriAttendancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSantriAttendancesInput, UserUncheckedUpdateWithoutSantriAttendancesInput>
  }

  export type UserUpdateWithoutSantriAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUpdateOneWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUpdateManyWithoutMentorNestedInput
    mentorAssignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutSantriAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUncheckedUpdateOneWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    mentorAssignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUncheckedUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type UserUpsertWithoutMentorAttendancesInput = {
    update: XOR<UserUpdateWithoutMentorAttendancesInput, UserUncheckedUpdateWithoutMentorAttendancesInput>
    create: XOR<UserCreateWithoutMentorAttendancesInput, UserUncheckedCreateWithoutMentorAttendancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMentorAttendancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMentorAttendancesInput, UserUncheckedUpdateWithoutMentorAttendancesInput>
  }

  export type UserUpdateWithoutMentorAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUpdateOneWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutMentorAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUncheckedUpdateOneWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUncheckedUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type DivisionCreateWithoutClassesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type DivisionUncheckedCreateWithoutClassesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type DivisionCreateOrConnectWithoutClassesInput = {
    where: DivisionWhereUniqueInput
    create: XOR<DivisionCreateWithoutClassesInput, DivisionUncheckedCreateWithoutClassesInput>
  }

  export type UserCreateWithoutMentorClassesInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileCreateNestedOneWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileCreateNestedOneWithoutUserInput
    mentorAttendances?: AttendanceCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutMentorClassesInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileUncheckedCreateNestedOneWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentorAttendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutMentorClassesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentorClassesInput, UserUncheckedCreateWithoutMentorClassesInput>
  }

  export type AttendanceCreateWithoutClassInput = {
    id?: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    santri: UserCreateNestedOneWithoutSantriAttendancesInput
    mentor: UserCreateNestedOneWithoutMentorAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutClassInput = {
    id?: string
    santriId: string
    mentorId: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput>
  }

  export type AttendanceCreateManyClassInputEnvelope = {
    data: AttendanceCreateManyClassInput | AttendanceCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutClassInput = {
    id?: string
    title: string
    description?: string | null
    submissionType: $Enums.SubmissionType
    attachmentUrl?: string | null
    due_date: Date | string
    createdAt?: Date | string
    mentor: UserCreateNestedOneWithoutMentorAssignmentsInput
    submissions?: AssignmentContentCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutClassInput = {
    id?: string
    mentorId: string
    title: string
    description?: string | null
    submissionType: $Enums.SubmissionType
    attachmentUrl?: string | null
    due_date: Date | string
    createdAt?: Date | string
    submissions?: AssignmentContentUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutClassInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput>
  }

  export type AssignmentCreateManyClassInputEnvelope = {
    data: AssignmentCreateManyClassInput | AssignmentCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type SantriProfileCreateWithoutClassInput = {
    id?: string
    gender?: $Enums.Gender | null
    phone?: string | null
    birthDate?: Date | string | null
    address?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSantriProfileInput
  }

  export type SantriProfileUncheckedCreateWithoutClassInput = {
    id?: string
    userId: string
    gender?: $Enums.Gender | null
    phone?: string | null
    birthDate?: Date | string | null
    address?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SantriProfileCreateOrConnectWithoutClassInput = {
    where: SantriProfileWhereUniqueInput
    create: XOR<SantriProfileCreateWithoutClassInput, SantriProfileUncheckedCreateWithoutClassInput>
  }

  export type SantriProfileCreateManyClassInputEnvelope = {
    data: SantriProfileCreateManyClassInput | SantriProfileCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type DailyJournalCreateWithoutClassInput = {
    id?: string
    attitudeScore?: number
    notes: string
    date: Date | string
    description: string
    tugasType?: $Enums.TugasType
    createdAt?: Date | string
    updatedAt?: Date | string
    santri: UserCreateNestedOneWithoutDailyJournalsInput
    mentor: UserCreateNestedOneWithoutMentorDailyJournalsInput
  }

  export type DailyJournalUncheckedCreateWithoutClassInput = {
    id?: string
    santriId: string
    mentorId: string
    attitudeScore?: number
    notes: string
    date: Date | string
    description: string
    tugasType?: $Enums.TugasType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyJournalCreateOrConnectWithoutClassInput = {
    where: DailyJournalWhereUniqueInput
    create: XOR<DailyJournalCreateWithoutClassInput, DailyJournalUncheckedCreateWithoutClassInput>
  }

  export type DailyJournalCreateManyClassInputEnvelope = {
    data: DailyJournalCreateManyClassInput | DailyJournalCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyEvaluationCreateWithoutClassInput = {
    id?: string
    month: number
    year: number
    taskAvg?: number
    attendancePoin?: number
    maxAttendPoin?: number
    attitudeAvg?: number
    taskScore?: number
    attendanceScore?: number
    attitudeScore?: number
    finalScore: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    santri: UserCreateNestedOneWithoutMonthlyEvaluationsInput
  }

  export type MonthlyEvaluationUncheckedCreateWithoutClassInput = {
    id?: string
    santriId: string
    month: number
    year: number
    taskAvg?: number
    attendancePoin?: number
    maxAttendPoin?: number
    attitudeAvg?: number
    taskScore?: number
    attendanceScore?: number
    attitudeScore?: number
    finalScore: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyEvaluationCreateOrConnectWithoutClassInput = {
    where: MonthlyEvaluationWhereUniqueInput
    create: XOR<MonthlyEvaluationCreateWithoutClassInput, MonthlyEvaluationUncheckedCreateWithoutClassInput>
  }

  export type MonthlyEvaluationCreateManyClassInputEnvelope = {
    data: MonthlyEvaluationCreateManyClassInput | MonthlyEvaluationCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type DivisionUpsertWithoutClassesInput = {
    update: XOR<DivisionUpdateWithoutClassesInput, DivisionUncheckedUpdateWithoutClassesInput>
    create: XOR<DivisionCreateWithoutClassesInput, DivisionUncheckedCreateWithoutClassesInput>
    where?: DivisionWhereInput
  }

  export type DivisionUpdateToOneWithWhereWithoutClassesInput = {
    where?: DivisionWhereInput
    data: XOR<DivisionUpdateWithoutClassesInput, DivisionUncheckedUpdateWithoutClassesInput>
  }

  export type DivisionUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisionUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutMentorClassesInput = {
    update: XOR<UserUpdateWithoutMentorClassesInput, UserUncheckedUpdateWithoutMentorClassesInput>
    create: XOR<UserCreateWithoutMentorClassesInput, UserUncheckedCreateWithoutMentorClassesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMentorClassesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMentorClassesInput, UserUncheckedUpdateWithoutMentorClassesInput>
  }

  export type UserUpdateWithoutMentorClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUpdateOneWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentorAttendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutMentorClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUncheckedUpdateOneWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorAttendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUncheckedUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutClassInput, AttendanceUncheckedUpdateWithoutClassInput>
    create: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutClassInput, AttendanceUncheckedUpdateWithoutClassInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutClassInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutClassInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    classId?: StringFilter<"Attendance"> | string
    santriId?: StringFilter<"Attendance"> | string
    mentorId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"Attendance"> | string | null
    imageUrl?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type AssignmentUpsertWithWhereUniqueWithoutClassInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutClassInput, AssignmentUncheckedUpdateWithoutClassInput>
    create: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutClassInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutClassInput, AssignmentUncheckedUpdateWithoutClassInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutClassInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutClassInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: StringFilter<"Assignment"> | string
    classId?: StringFilter<"Assignment"> | string
    mentorId?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringNullableFilter<"Assignment"> | string | null
    submissionType?: EnumSubmissionTypeFilter<"Assignment"> | $Enums.SubmissionType
    attachmentUrl?: StringNullableFilter<"Assignment"> | string | null
    due_date?: DateTimeFilter<"Assignment"> | Date | string
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
  }

  export type SantriProfileUpsertWithWhereUniqueWithoutClassInput = {
    where: SantriProfileWhereUniqueInput
    update: XOR<SantriProfileUpdateWithoutClassInput, SantriProfileUncheckedUpdateWithoutClassInput>
    create: XOR<SantriProfileCreateWithoutClassInput, SantriProfileUncheckedCreateWithoutClassInput>
  }

  export type SantriProfileUpdateWithWhereUniqueWithoutClassInput = {
    where: SantriProfileWhereUniqueInput
    data: XOR<SantriProfileUpdateWithoutClassInput, SantriProfileUncheckedUpdateWithoutClassInput>
  }

  export type SantriProfileUpdateManyWithWhereWithoutClassInput = {
    where: SantriProfileScalarWhereInput
    data: XOR<SantriProfileUpdateManyMutationInput, SantriProfileUncheckedUpdateManyWithoutClassInput>
  }

  export type SantriProfileScalarWhereInput = {
    AND?: SantriProfileScalarWhereInput | SantriProfileScalarWhereInput[]
    OR?: SantriProfileScalarWhereInput[]
    NOT?: SantriProfileScalarWhereInput | SantriProfileScalarWhereInput[]
    id?: StringFilter<"SantriProfile"> | string
    userId?: StringFilter<"SantriProfile"> | string
    gender?: EnumGenderNullableFilter<"SantriProfile"> | $Enums.Gender | null
    phone?: StringNullableFilter<"SantriProfile"> | string | null
    birthDate?: DateTimeNullableFilter<"SantriProfile"> | Date | string | null
    address?: StringNullableFilter<"SantriProfile"> | string | null
    photoUrl?: StringNullableFilter<"SantriProfile"> | string | null
    classId?: StringNullableFilter<"SantriProfile"> | string | null
    createdAt?: DateTimeFilter<"SantriProfile"> | Date | string
    updatedAt?: DateTimeFilter<"SantriProfile"> | Date | string
  }

  export type DailyJournalUpsertWithWhereUniqueWithoutClassInput = {
    where: DailyJournalWhereUniqueInput
    update: XOR<DailyJournalUpdateWithoutClassInput, DailyJournalUncheckedUpdateWithoutClassInput>
    create: XOR<DailyJournalCreateWithoutClassInput, DailyJournalUncheckedCreateWithoutClassInput>
  }

  export type DailyJournalUpdateWithWhereUniqueWithoutClassInput = {
    where: DailyJournalWhereUniqueInput
    data: XOR<DailyJournalUpdateWithoutClassInput, DailyJournalUncheckedUpdateWithoutClassInput>
  }

  export type DailyJournalUpdateManyWithWhereWithoutClassInput = {
    where: DailyJournalScalarWhereInput
    data: XOR<DailyJournalUpdateManyMutationInput, DailyJournalUncheckedUpdateManyWithoutClassInput>
  }

  export type DailyJournalScalarWhereInput = {
    AND?: DailyJournalScalarWhereInput | DailyJournalScalarWhereInput[]
    OR?: DailyJournalScalarWhereInput[]
    NOT?: DailyJournalScalarWhereInput | DailyJournalScalarWhereInput[]
    id?: StringFilter<"DailyJournal"> | string
    santriId?: StringFilter<"DailyJournal"> | string
    classId?: StringFilter<"DailyJournal"> | string
    mentorId?: StringFilter<"DailyJournal"> | string
    attitudeScore?: FloatFilter<"DailyJournal"> | number
    notes?: StringFilter<"DailyJournal"> | string
    date?: DateTimeFilter<"DailyJournal"> | Date | string
    description?: StringFilter<"DailyJournal"> | string
    tugasType?: EnumTugasTypeFilter<"DailyJournal"> | $Enums.TugasType
    createdAt?: DateTimeFilter<"DailyJournal"> | Date | string
    updatedAt?: DateTimeFilter<"DailyJournal"> | Date | string
  }

  export type MonthlyEvaluationUpsertWithWhereUniqueWithoutClassInput = {
    where: MonthlyEvaluationWhereUniqueInput
    update: XOR<MonthlyEvaluationUpdateWithoutClassInput, MonthlyEvaluationUncheckedUpdateWithoutClassInput>
    create: XOR<MonthlyEvaluationCreateWithoutClassInput, MonthlyEvaluationUncheckedCreateWithoutClassInput>
  }

  export type MonthlyEvaluationUpdateWithWhereUniqueWithoutClassInput = {
    where: MonthlyEvaluationWhereUniqueInput
    data: XOR<MonthlyEvaluationUpdateWithoutClassInput, MonthlyEvaluationUncheckedUpdateWithoutClassInput>
  }

  export type MonthlyEvaluationUpdateManyWithWhereWithoutClassInput = {
    where: MonthlyEvaluationScalarWhereInput
    data: XOR<MonthlyEvaluationUpdateManyMutationInput, MonthlyEvaluationUncheckedUpdateManyWithoutClassInput>
  }

  export type MonthlyEvaluationScalarWhereInput = {
    AND?: MonthlyEvaluationScalarWhereInput | MonthlyEvaluationScalarWhereInput[]
    OR?: MonthlyEvaluationScalarWhereInput[]
    NOT?: MonthlyEvaluationScalarWhereInput | MonthlyEvaluationScalarWhereInput[]
    id?: StringFilter<"MonthlyEvaluation"> | string
    santriId?: StringFilter<"MonthlyEvaluation"> | string
    classId?: StringFilter<"MonthlyEvaluation"> | string
    month?: IntFilter<"MonthlyEvaluation"> | number
    year?: IntFilter<"MonthlyEvaluation"> | number
    taskAvg?: FloatFilter<"MonthlyEvaluation"> | number
    attendancePoin?: IntFilter<"MonthlyEvaluation"> | number
    maxAttendPoin?: IntFilter<"MonthlyEvaluation"> | number
    attitudeAvg?: FloatFilter<"MonthlyEvaluation"> | number
    taskScore?: FloatFilter<"MonthlyEvaluation"> | number
    attendanceScore?: FloatFilter<"MonthlyEvaluation"> | number
    attitudeScore?: FloatFilter<"MonthlyEvaluation"> | number
    finalScore?: FloatFilter<"MonthlyEvaluation"> | number
    notes?: StringNullableFilter<"MonthlyEvaluation"> | string | null
    createdAt?: DateTimeFilter<"MonthlyEvaluation"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyEvaluation"> | Date | string
  }

  export type ClassCreateWithoutDailyJournalsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    division: DivisionCreateNestedOneWithoutClassesInput
    mentor: UserCreateNestedOneWithoutMentorClassesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    santriProfiles?: SantriProfileCreateNestedManyWithoutClassInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutDailyJournalsInput = {
    id?: string
    divisiId: string
    name: string
    mentorId: string
    createdAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    santriProfiles?: SantriProfileUncheckedCreateNestedManyWithoutClassInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutDailyJournalsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutDailyJournalsInput, ClassUncheckedCreateWithoutDailyJournalsInput>
  }

  export type UserCreateWithoutDailyJournalsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileCreateNestedOneWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileCreateNestedOneWithoutUserInput
    mentorClasses?: ClassCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutDailyJournalsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileUncheckedCreateNestedOneWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentorClasses?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutDailyJournalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyJournalsInput, UserUncheckedCreateWithoutDailyJournalsInput>
  }

  export type UserCreateWithoutMentorDailyJournalsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileCreateNestedOneWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileCreateNestedOneWithoutUserInput
    mentorClasses?: ClassCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutSantriInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutMentorDailyJournalsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileUncheckedCreateNestedOneWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentorClasses?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutSantriInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutMentorDailyJournalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentorDailyJournalsInput, UserUncheckedCreateWithoutMentorDailyJournalsInput>
  }

  export type ClassUpsertWithoutDailyJournalsInput = {
    update: XOR<ClassUpdateWithoutDailyJournalsInput, ClassUncheckedUpdateWithoutDailyJournalsInput>
    create: XOR<ClassCreateWithoutDailyJournalsInput, ClassUncheckedCreateWithoutDailyJournalsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutDailyJournalsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutDailyJournalsInput, ClassUncheckedUpdateWithoutDailyJournalsInput>
  }

  export type ClassUpdateWithoutDailyJournalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    division?: DivisionUpdateOneRequiredWithoutClassesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentorClassesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    santriProfiles?: SantriProfileUpdateManyWithoutClassNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutDailyJournalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    divisiId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    santriProfiles?: SantriProfileUncheckedUpdateManyWithoutClassNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UserUpsertWithoutDailyJournalsInput = {
    update: XOR<UserUpdateWithoutDailyJournalsInput, UserUncheckedUpdateWithoutDailyJournalsInput>
    create: XOR<UserCreateWithoutDailyJournalsInput, UserUncheckedCreateWithoutDailyJournalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyJournalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyJournalsInput, UserUncheckedUpdateWithoutDailyJournalsInput>
  }

  export type UserUpdateWithoutDailyJournalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUpdateOneWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyJournalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUncheckedUpdateOneWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUncheckedUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type UserUpsertWithoutMentorDailyJournalsInput = {
    update: XOR<UserUpdateWithoutMentorDailyJournalsInput, UserUncheckedUpdateWithoutMentorDailyJournalsInput>
    create: XOR<UserCreateWithoutMentorDailyJournalsInput, UserUncheckedCreateWithoutMentorDailyJournalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMentorDailyJournalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMentorDailyJournalsInput, UserUncheckedUpdateWithoutMentorDailyJournalsInput>
  }

  export type UserUpdateWithoutMentorDailyJournalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUpdateOneWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutSantriNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutMentorDailyJournalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUncheckedUpdateOneWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutSantriNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type ClassCreateWithoutDivisionInput = {
    id?: string
    name: string
    createdAt?: Date | string
    mentor: UserCreateNestedOneWithoutMentorClassesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    santriProfiles?: SantriProfileCreateNestedManyWithoutClassInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutClassInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutDivisionInput = {
    id?: string
    name: string
    mentorId: string
    createdAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    santriProfiles?: SantriProfileUncheckedCreateNestedManyWithoutClassInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutClassInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutDivisionInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutDivisionInput, ClassUncheckedCreateWithoutDivisionInput>
  }

  export type ClassCreateManyDivisionInputEnvelope = {
    data: ClassCreateManyDivisionInput | ClassCreateManyDivisionInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithWhereUniqueWithoutDivisionInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutDivisionInput, ClassUncheckedUpdateWithoutDivisionInput>
    create: XOR<ClassCreateWithoutDivisionInput, ClassUncheckedCreateWithoutDivisionInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutDivisionInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutDivisionInput, ClassUncheckedUpdateWithoutDivisionInput>
  }

  export type ClassUpdateManyWithWhereWithoutDivisionInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutDivisionInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: StringFilter<"Class"> | string
    divisiId?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    mentorId?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
  }

  export type UserCreateWithoutMonthlyEvaluationsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileCreateNestedOneWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileCreateNestedOneWithoutUserInput
    mentorClasses?: ClassCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalCreateNestedManyWithoutMentorInput
  }

  export type UserUncheckedCreateWithoutMonthlyEvaluationsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileUncheckedCreateNestedOneWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentorClasses?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutMentorInput
  }

  export type UserCreateOrConnectWithoutMonthlyEvaluationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMonthlyEvaluationsInput, UserUncheckedCreateWithoutMonthlyEvaluationsInput>
  }

  export type ClassCreateWithoutMonthlyEvaluationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    division: DivisionCreateNestedOneWithoutClassesInput
    mentor: UserCreateNestedOneWithoutMentorClassesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    santriProfiles?: SantriProfileCreateNestedManyWithoutClassInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutMonthlyEvaluationsInput = {
    id?: string
    divisiId: string
    name: string
    mentorId: string
    createdAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    santriProfiles?: SantriProfileUncheckedCreateNestedManyWithoutClassInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutMonthlyEvaluationsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutMonthlyEvaluationsInput, ClassUncheckedCreateWithoutMonthlyEvaluationsInput>
  }

  export type UserUpsertWithoutMonthlyEvaluationsInput = {
    update: XOR<UserUpdateWithoutMonthlyEvaluationsInput, UserUncheckedUpdateWithoutMonthlyEvaluationsInput>
    create: XOR<UserCreateWithoutMonthlyEvaluationsInput, UserUncheckedCreateWithoutMonthlyEvaluationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMonthlyEvaluationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMonthlyEvaluationsInput, UserUncheckedUpdateWithoutMonthlyEvaluationsInput>
  }

  export type UserUpdateWithoutMonthlyEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUpdateOneWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUpdateManyWithoutMentorNestedInput
  }

  export type UserUncheckedUpdateWithoutMonthlyEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUncheckedUpdateOneWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUncheckedUpdateManyWithoutMentorNestedInput
  }

  export type ClassUpsertWithoutMonthlyEvaluationsInput = {
    update: XOR<ClassUpdateWithoutMonthlyEvaluationsInput, ClassUncheckedUpdateWithoutMonthlyEvaluationsInput>
    create: XOR<ClassCreateWithoutMonthlyEvaluationsInput, ClassUncheckedCreateWithoutMonthlyEvaluationsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutMonthlyEvaluationsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutMonthlyEvaluationsInput, ClassUncheckedUpdateWithoutMonthlyEvaluationsInput>
  }

  export type ClassUpdateWithoutMonthlyEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    division?: DivisionUpdateOneRequiredWithoutClassesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentorClassesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    santriProfiles?: SantriProfileUpdateManyWithoutClassNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutMonthlyEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    divisiId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    santriProfiles?: SantriProfileUncheckedUpdateManyWithoutClassNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UserCreateWithoutSantriProfileInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileCreateNestedOneWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
    mentorClasses?: ClassCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutSantriProfileInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileUncheckedCreateNestedOneWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    mentorClasses?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutSantriProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSantriProfileInput, UserUncheckedCreateWithoutSantriProfileInput>
  }

  export type ClassCreateWithoutSantriProfilesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    division: DivisionCreateNestedOneWithoutClassesInput
    mentor: UserCreateNestedOneWithoutMentorClassesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutClassInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutSantriProfilesInput = {
    id?: string
    divisiId: string
    name: string
    mentorId: string
    createdAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutClassInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutSantriProfilesInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutSantriProfilesInput, ClassUncheckedCreateWithoutSantriProfilesInput>
  }

  export type UserUpsertWithoutSantriProfileInput = {
    update: XOR<UserUpdateWithoutSantriProfileInput, UserUncheckedUpdateWithoutSantriProfileInput>
    create: XOR<UserCreateWithoutSantriProfileInput, UserUncheckedCreateWithoutSantriProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSantriProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSantriProfileInput, UserUncheckedUpdateWithoutSantriProfileInput>
  }

  export type UserUpdateWithoutSantriProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUpdateOneWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    mentorClasses?: ClassUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutSantriProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUncheckedUpdateOneWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    mentorClasses?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUncheckedUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type ClassUpsertWithoutSantriProfilesInput = {
    update: XOR<ClassUpdateWithoutSantriProfilesInput, ClassUncheckedUpdateWithoutSantriProfilesInput>
    create: XOR<ClassCreateWithoutSantriProfilesInput, ClassUncheckedCreateWithoutSantriProfilesInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutSantriProfilesInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutSantriProfilesInput, ClassUncheckedUpdateWithoutSantriProfilesInput>
  }

  export type ClassUpdateWithoutSantriProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    division?: DivisionUpdateOneRequiredWithoutClassesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentorClassesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutClassNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutSantriProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    divisiId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutClassNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutClassNestedInput
  }

  export type WaliProfileCreateWithoutUserInput = {
    id?: string
    gender?: $Enums.Gender | null
    phone?: string | null
    address?: string | null
    photoUrl?: string | null
    job?: string | null
  }

  export type WaliProfileUncheckedCreateWithoutUserInput = {
    id?: string
    gender?: $Enums.Gender | null
    phone?: string | null
    address?: string | null
    photoUrl?: string | null
    job?: string | null
  }

  export type WaliProfileCreateOrConnectWithoutUserInput = {
    where: WaliProfileWhereUniqueInput
    create: XOR<WaliProfileCreateWithoutUserInput, WaliProfileUncheckedCreateWithoutUserInput>
  }

  export type VerificationCreateWithoutUserInput = {
    id?: string
    otpCode: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationUncheckedCreateWithoutUserInput = {
    id?: string
    otpCode: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationCreateOrConnectWithoutUserInput = {
    where: VerificationWhereUniqueInput
    create: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput>
  }

  export type VerificationCreateManyUserInputEnvelope = {
    data: VerificationCreateManyUserInput | VerificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SantriProfileCreateWithoutUserInput = {
    id?: string
    gender?: $Enums.Gender | null
    phone?: string | null
    birthDate?: Date | string | null
    address?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    class?: ClassCreateNestedOneWithoutSantriProfilesInput
  }

  export type SantriProfileUncheckedCreateWithoutUserInput = {
    id?: string
    gender?: $Enums.Gender | null
    phone?: string | null
    birthDate?: Date | string | null
    address?: string | null
    photoUrl?: string | null
    classId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SantriProfileCreateOrConnectWithoutUserInput = {
    where: SantriProfileWhereUniqueInput
    create: XOR<SantriProfileCreateWithoutUserInput, SantriProfileUncheckedCreateWithoutUserInput>
  }

  export type ClassCreateWithoutMentorInput = {
    id?: string
    name: string
    createdAt?: Date | string
    division: DivisionCreateNestedOneWithoutClassesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    santriProfiles?: SantriProfileCreateNestedManyWithoutClassInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutClassInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutMentorInput = {
    id?: string
    divisiId: string
    name: string
    createdAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    santriProfiles?: SantriProfileUncheckedCreateNestedManyWithoutClassInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutClassInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutMentorInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutMentorInput, ClassUncheckedCreateWithoutMentorInput>
  }

  export type ClassCreateManyMentorInputEnvelope = {
    data: ClassCreateManyMentorInput | ClassCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutMentorInput = {
    id?: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutAttendancesInput
    santri: UserCreateNestedOneWithoutSantriAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutMentorInput = {
    id?: string
    classId: string
    santriId: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutMentorInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutMentorInput, AttendanceUncheckedCreateWithoutMentorInput>
  }

  export type AttendanceCreateManyMentorInputEnvelope = {
    data: AttendanceCreateManyMentorInput | AttendanceCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutSantriInput = {
    id?: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutAttendancesInput
    mentor: UserCreateNestedOneWithoutMentorAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutSantriInput = {
    id?: string
    classId: string
    mentorId: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutSantriInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutSantriInput, AttendanceUncheckedCreateWithoutSantriInput>
  }

  export type AttendanceCreateManySantriInputEnvelope = {
    data: AttendanceCreateManySantriInput | AttendanceCreateManySantriInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutMentorInput = {
    id?: string
    title: string
    description?: string | null
    submissionType: $Enums.SubmissionType
    attachmentUrl?: string | null
    due_date: Date | string
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutAssignmentsInput
    submissions?: AssignmentContentCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutMentorInput = {
    id?: string
    classId: string
    title: string
    description?: string | null
    submissionType: $Enums.SubmissionType
    attachmentUrl?: string | null
    due_date: Date | string
    createdAt?: Date | string
    submissions?: AssignmentContentUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutMentorInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutMentorInput, AssignmentUncheckedCreateWithoutMentorInput>
  }

  export type AssignmentCreateManyMentorInputEnvelope = {
    data: AssignmentCreateManyMentorInput | AssignmentCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentContentCreateWithoutSantriInput = {
    id?: string
    contentType: $Enums.ContentType
    fileUrl?: AssignmentContentCreatefileUrlInput | string[]
    score?: number | null
    mentorFeedback?: string | null
    status?: $Enums.GradingStatus
    submittedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionsInput
  }

  export type AssignmentContentUncheckedCreateWithoutSantriInput = {
    id?: string
    assignmentId: string
    contentType: $Enums.ContentType
    fileUrl?: AssignmentContentCreatefileUrlInput | string[]
    score?: number | null
    mentorFeedback?: string | null
    status?: $Enums.GradingStatus
    submittedAt?: Date | string
  }

  export type AssignmentContentCreateOrConnectWithoutSantriInput = {
    where: AssignmentContentWhereUniqueInput
    create: XOR<AssignmentContentCreateWithoutSantriInput, AssignmentContentUncheckedCreateWithoutSantriInput>
  }

  export type AssignmentContentCreateManySantriInputEnvelope = {
    data: AssignmentContentCreateManySantriInput | AssignmentContentCreateManySantriInput[]
    skipDuplicates?: boolean
  }

  export type WaliSantriRelationCreateWithoutWaliInput = {
    id?: string
    category?: $Enums.WaliSantriCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    santri: UserCreateNestedOneWithoutSantriRelationsInput
  }

  export type WaliSantriRelationUncheckedCreateWithoutWaliInput = {
    id?: string
    santriId: string
    category?: $Enums.WaliSantriCategory
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaliSantriRelationCreateOrConnectWithoutWaliInput = {
    where: WaliSantriRelationWhereUniqueInput
    create: XOR<WaliSantriRelationCreateWithoutWaliInput, WaliSantriRelationUncheckedCreateWithoutWaliInput>
  }

  export type WaliSantriRelationCreateManyWaliInputEnvelope = {
    data: WaliSantriRelationCreateManyWaliInput | WaliSantriRelationCreateManyWaliInput[]
    skipDuplicates?: boolean
  }

  export type WaliSantriRelationCreateWithoutSantriInput = {
    id?: string
    category?: $Enums.WaliSantriCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    wali: UserCreateNestedOneWithoutWaliRelationsInput
  }

  export type WaliSantriRelationUncheckedCreateWithoutSantriInput = {
    id?: string
    waliId: string
    category?: $Enums.WaliSantriCategory
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaliSantriRelationCreateOrConnectWithoutSantriInput = {
    where: WaliSantriRelationWhereUniqueInput
    create: XOR<WaliSantriRelationCreateWithoutSantriInput, WaliSantriRelationUncheckedCreateWithoutSantriInput>
  }

  export type WaliSantriRelationCreateManySantriInputEnvelope = {
    data: WaliSantriRelationCreateManySantriInput | WaliSantriRelationCreateManySantriInput[]
    skipDuplicates?: boolean
  }

  export type DailyJournalCreateWithoutSantriInput = {
    id?: string
    attitudeScore?: number
    notes: string
    date: Date | string
    description: string
    tugasType?: $Enums.TugasType
    createdAt?: Date | string
    updatedAt?: Date | string
    class: ClassCreateNestedOneWithoutDailyJournalsInput
    mentor: UserCreateNestedOneWithoutMentorDailyJournalsInput
  }

  export type DailyJournalUncheckedCreateWithoutSantriInput = {
    id?: string
    classId: string
    mentorId: string
    attitudeScore?: number
    notes: string
    date: Date | string
    description: string
    tugasType?: $Enums.TugasType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyJournalCreateOrConnectWithoutSantriInput = {
    where: DailyJournalWhereUniqueInput
    create: XOR<DailyJournalCreateWithoutSantriInput, DailyJournalUncheckedCreateWithoutSantriInput>
  }

  export type DailyJournalCreateManySantriInputEnvelope = {
    data: DailyJournalCreateManySantriInput | DailyJournalCreateManySantriInput[]
    skipDuplicates?: boolean
  }

  export type DailyJournalCreateWithoutMentorInput = {
    id?: string
    attitudeScore?: number
    notes: string
    date: Date | string
    description: string
    tugasType?: $Enums.TugasType
    createdAt?: Date | string
    updatedAt?: Date | string
    class: ClassCreateNestedOneWithoutDailyJournalsInput
    santri: UserCreateNestedOneWithoutDailyJournalsInput
  }

  export type DailyJournalUncheckedCreateWithoutMentorInput = {
    id?: string
    santriId: string
    classId: string
    attitudeScore?: number
    notes: string
    date: Date | string
    description: string
    tugasType?: $Enums.TugasType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyJournalCreateOrConnectWithoutMentorInput = {
    where: DailyJournalWhereUniqueInput
    create: XOR<DailyJournalCreateWithoutMentorInput, DailyJournalUncheckedCreateWithoutMentorInput>
  }

  export type DailyJournalCreateManyMentorInputEnvelope = {
    data: DailyJournalCreateManyMentorInput | DailyJournalCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyEvaluationCreateWithoutSantriInput = {
    id?: string
    month: number
    year: number
    taskAvg?: number
    attendancePoin?: number
    maxAttendPoin?: number
    attitudeAvg?: number
    taskScore?: number
    attendanceScore?: number
    attitudeScore?: number
    finalScore: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    class: ClassCreateNestedOneWithoutMonthlyEvaluationsInput
  }

  export type MonthlyEvaluationUncheckedCreateWithoutSantriInput = {
    id?: string
    classId: string
    month: number
    year: number
    taskAvg?: number
    attendancePoin?: number
    maxAttendPoin?: number
    attitudeAvg?: number
    taskScore?: number
    attendanceScore?: number
    attitudeScore?: number
    finalScore: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyEvaluationCreateOrConnectWithoutSantriInput = {
    where: MonthlyEvaluationWhereUniqueInput
    create: XOR<MonthlyEvaluationCreateWithoutSantriInput, MonthlyEvaluationUncheckedCreateWithoutSantriInput>
  }

  export type MonthlyEvaluationCreateManySantriInputEnvelope = {
    data: MonthlyEvaluationCreateManySantriInput | MonthlyEvaluationCreateManySantriInput[]
    skipDuplicates?: boolean
  }

  export type WaliProfileUpsertWithoutUserInput = {
    update: XOR<WaliProfileUpdateWithoutUserInput, WaliProfileUncheckedUpdateWithoutUserInput>
    create: XOR<WaliProfileCreateWithoutUserInput, WaliProfileUncheckedCreateWithoutUserInput>
    where?: WaliProfileWhereInput
  }

  export type WaliProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: WaliProfileWhereInput
    data: XOR<WaliProfileUpdateWithoutUserInput, WaliProfileUncheckedUpdateWithoutUserInput>
  }

  export type WaliProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WaliProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationUpsertWithWhereUniqueWithoutUserInput = {
    where: VerificationWhereUniqueInput
    update: XOR<VerificationUpdateWithoutUserInput, VerificationUncheckedUpdateWithoutUserInput>
    create: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput>
  }

  export type VerificationUpdateWithWhereUniqueWithoutUserInput = {
    where: VerificationWhereUniqueInput
    data: XOR<VerificationUpdateWithoutUserInput, VerificationUncheckedUpdateWithoutUserInput>
  }

  export type VerificationUpdateManyWithWhereWithoutUserInput = {
    where: VerificationScalarWhereInput
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyWithoutUserInput>
  }

  export type VerificationScalarWhereInput = {
    AND?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
    OR?: VerificationScalarWhereInput[]
    NOT?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
    id?: StringFilter<"Verification"> | string
    user_id?: StringFilter<"Verification"> | string
    otpCode?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type SantriProfileUpsertWithoutUserInput = {
    update: XOR<SantriProfileUpdateWithoutUserInput, SantriProfileUncheckedUpdateWithoutUserInput>
    create: XOR<SantriProfileCreateWithoutUserInput, SantriProfileUncheckedCreateWithoutUserInput>
    where?: SantriProfileWhereInput
  }

  export type SantriProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: SantriProfileWhereInput
    data: XOR<SantriProfileUpdateWithoutUserInput, SantriProfileUncheckedUpdateWithoutUserInput>
  }

  export type SantriProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneWithoutSantriProfilesNestedInput
  }

  export type SantriProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUpsertWithWhereUniqueWithoutMentorInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutMentorInput, ClassUncheckedUpdateWithoutMentorInput>
    create: XOR<ClassCreateWithoutMentorInput, ClassUncheckedCreateWithoutMentorInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutMentorInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutMentorInput, ClassUncheckedUpdateWithoutMentorInput>
  }

  export type ClassUpdateManyWithWhereWithoutMentorInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutMentorInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutMentorInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutMentorInput, AttendanceUncheckedUpdateWithoutMentorInput>
    create: XOR<AttendanceCreateWithoutMentorInput, AttendanceUncheckedCreateWithoutMentorInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutMentorInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutMentorInput, AttendanceUncheckedUpdateWithoutMentorInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutMentorInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutMentorInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutSantriInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutSantriInput, AttendanceUncheckedUpdateWithoutSantriInput>
    create: XOR<AttendanceCreateWithoutSantriInput, AttendanceUncheckedCreateWithoutSantriInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutSantriInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutSantriInput, AttendanceUncheckedUpdateWithoutSantriInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutSantriInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutSantriInput>
  }

  export type AssignmentUpsertWithWhereUniqueWithoutMentorInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutMentorInput, AssignmentUncheckedUpdateWithoutMentorInput>
    create: XOR<AssignmentCreateWithoutMentorInput, AssignmentUncheckedCreateWithoutMentorInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutMentorInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutMentorInput, AssignmentUncheckedUpdateWithoutMentorInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutMentorInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutMentorInput>
  }

  export type AssignmentContentUpsertWithWhereUniqueWithoutSantriInput = {
    where: AssignmentContentWhereUniqueInput
    update: XOR<AssignmentContentUpdateWithoutSantriInput, AssignmentContentUncheckedUpdateWithoutSantriInput>
    create: XOR<AssignmentContentCreateWithoutSantriInput, AssignmentContentUncheckedCreateWithoutSantriInput>
  }

  export type AssignmentContentUpdateWithWhereUniqueWithoutSantriInput = {
    where: AssignmentContentWhereUniqueInput
    data: XOR<AssignmentContentUpdateWithoutSantriInput, AssignmentContentUncheckedUpdateWithoutSantriInput>
  }

  export type AssignmentContentUpdateManyWithWhereWithoutSantriInput = {
    where: AssignmentContentScalarWhereInput
    data: XOR<AssignmentContentUpdateManyMutationInput, AssignmentContentUncheckedUpdateManyWithoutSantriInput>
  }

  export type WaliSantriRelationUpsertWithWhereUniqueWithoutWaliInput = {
    where: WaliSantriRelationWhereUniqueInput
    update: XOR<WaliSantriRelationUpdateWithoutWaliInput, WaliSantriRelationUncheckedUpdateWithoutWaliInput>
    create: XOR<WaliSantriRelationCreateWithoutWaliInput, WaliSantriRelationUncheckedCreateWithoutWaliInput>
  }

  export type WaliSantriRelationUpdateWithWhereUniqueWithoutWaliInput = {
    where: WaliSantriRelationWhereUniqueInput
    data: XOR<WaliSantriRelationUpdateWithoutWaliInput, WaliSantriRelationUncheckedUpdateWithoutWaliInput>
  }

  export type WaliSantriRelationUpdateManyWithWhereWithoutWaliInput = {
    where: WaliSantriRelationScalarWhereInput
    data: XOR<WaliSantriRelationUpdateManyMutationInput, WaliSantriRelationUncheckedUpdateManyWithoutWaliInput>
  }

  export type WaliSantriRelationScalarWhereInput = {
    AND?: WaliSantriRelationScalarWhereInput | WaliSantriRelationScalarWhereInput[]
    OR?: WaliSantriRelationScalarWhereInput[]
    NOT?: WaliSantriRelationScalarWhereInput | WaliSantriRelationScalarWhereInput[]
    id?: StringFilter<"WaliSantriRelation"> | string
    waliId?: StringFilter<"WaliSantriRelation"> | string
    santriId?: StringFilter<"WaliSantriRelation"> | string
    category?: EnumWaliSantriCategoryFilter<"WaliSantriRelation"> | $Enums.WaliSantriCategory
    createdAt?: DateTimeFilter<"WaliSantriRelation"> | Date | string
    updatedAt?: DateTimeFilter<"WaliSantriRelation"> | Date | string
  }

  export type WaliSantriRelationUpsertWithWhereUniqueWithoutSantriInput = {
    where: WaliSantriRelationWhereUniqueInput
    update: XOR<WaliSantriRelationUpdateWithoutSantriInput, WaliSantriRelationUncheckedUpdateWithoutSantriInput>
    create: XOR<WaliSantriRelationCreateWithoutSantriInput, WaliSantriRelationUncheckedCreateWithoutSantriInput>
  }

  export type WaliSantriRelationUpdateWithWhereUniqueWithoutSantriInput = {
    where: WaliSantriRelationWhereUniqueInput
    data: XOR<WaliSantriRelationUpdateWithoutSantriInput, WaliSantriRelationUncheckedUpdateWithoutSantriInput>
  }

  export type WaliSantriRelationUpdateManyWithWhereWithoutSantriInput = {
    where: WaliSantriRelationScalarWhereInput
    data: XOR<WaliSantriRelationUpdateManyMutationInput, WaliSantriRelationUncheckedUpdateManyWithoutSantriInput>
  }

  export type DailyJournalUpsertWithWhereUniqueWithoutSantriInput = {
    where: DailyJournalWhereUniqueInput
    update: XOR<DailyJournalUpdateWithoutSantriInput, DailyJournalUncheckedUpdateWithoutSantriInput>
    create: XOR<DailyJournalCreateWithoutSantriInput, DailyJournalUncheckedCreateWithoutSantriInput>
  }

  export type DailyJournalUpdateWithWhereUniqueWithoutSantriInput = {
    where: DailyJournalWhereUniqueInput
    data: XOR<DailyJournalUpdateWithoutSantriInput, DailyJournalUncheckedUpdateWithoutSantriInput>
  }

  export type DailyJournalUpdateManyWithWhereWithoutSantriInput = {
    where: DailyJournalScalarWhereInput
    data: XOR<DailyJournalUpdateManyMutationInput, DailyJournalUncheckedUpdateManyWithoutSantriInput>
  }

  export type DailyJournalUpsertWithWhereUniqueWithoutMentorInput = {
    where: DailyJournalWhereUniqueInput
    update: XOR<DailyJournalUpdateWithoutMentorInput, DailyJournalUncheckedUpdateWithoutMentorInput>
    create: XOR<DailyJournalCreateWithoutMentorInput, DailyJournalUncheckedCreateWithoutMentorInput>
  }

  export type DailyJournalUpdateWithWhereUniqueWithoutMentorInput = {
    where: DailyJournalWhereUniqueInput
    data: XOR<DailyJournalUpdateWithoutMentorInput, DailyJournalUncheckedUpdateWithoutMentorInput>
  }

  export type DailyJournalUpdateManyWithWhereWithoutMentorInput = {
    where: DailyJournalScalarWhereInput
    data: XOR<DailyJournalUpdateManyMutationInput, DailyJournalUncheckedUpdateManyWithoutMentorInput>
  }

  export type MonthlyEvaluationUpsertWithWhereUniqueWithoutSantriInput = {
    where: MonthlyEvaluationWhereUniqueInput
    update: XOR<MonthlyEvaluationUpdateWithoutSantriInput, MonthlyEvaluationUncheckedUpdateWithoutSantriInput>
    create: XOR<MonthlyEvaluationCreateWithoutSantriInput, MonthlyEvaluationUncheckedCreateWithoutSantriInput>
  }

  export type MonthlyEvaluationUpdateWithWhereUniqueWithoutSantriInput = {
    where: MonthlyEvaluationWhereUniqueInput
    data: XOR<MonthlyEvaluationUpdateWithoutSantriInput, MonthlyEvaluationUncheckedUpdateWithoutSantriInput>
  }

  export type MonthlyEvaluationUpdateManyWithWhereWithoutSantriInput = {
    where: MonthlyEvaluationScalarWhereInput
    data: XOR<MonthlyEvaluationUpdateManyMutationInput, MonthlyEvaluationUncheckedUpdateManyWithoutSantriInput>
  }

  export type UserCreateWithoutWaliProfileInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileCreateNestedOneWithoutUserInput
    mentorClasses?: ClassCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutWaliProfileInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentorClasses?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santriRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutWaliProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWaliProfileInput, UserUncheckedCreateWithoutWaliProfileInput>
  }

  export type UserUpsertWithoutWaliProfileInput = {
    update: XOR<UserUpdateWithoutWaliProfileInput, UserUncheckedUpdateWithoutWaliProfileInput>
    create: XOR<UserCreateWithoutWaliProfileInput, UserUncheckedCreateWithoutWaliProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWaliProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWaliProfileInput, UserUncheckedUpdateWithoutWaliProfileInput>
  }

  export type UserUpdateWithoutWaliProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutWaliProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santriRelations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUncheckedUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type UserCreateWithoutWaliRelationsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileCreateNestedOneWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileCreateNestedOneWithoutUserInput
    mentorClasses?: ClassCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    santriRelations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutWaliRelationsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileUncheckedCreateNestedOneWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentorClasses?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    santriRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutWaliRelationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWaliRelationsInput, UserUncheckedCreateWithoutWaliRelationsInput>
  }

  export type UserCreateWithoutSantriRelationsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileCreateNestedOneWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileCreateNestedOneWithoutUserInput
    mentorClasses?: ClassCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    dailyJournals?: DailyJournalCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutSantriRelationsInput = {
    id?: string
    nis?: string | null
    fullName: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    waliProfile?: WaliProfileUncheckedCreateNestedOneWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santriProfile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentorClasses?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentorAttendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santriAttendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentorAssignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santriSubmissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    waliRelations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    dailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutSantriInput
    mentorDailyJournals?: DailyJournalUncheckedCreateNestedManyWithoutMentorInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutSantriRelationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSantriRelationsInput, UserUncheckedCreateWithoutSantriRelationsInput>
  }

  export type UserUpsertWithoutWaliRelationsInput = {
    update: XOR<UserUpdateWithoutWaliRelationsInput, UserUncheckedUpdateWithoutWaliRelationsInput>
    create: XOR<UserCreateWithoutWaliRelationsInput, UserUncheckedCreateWithoutWaliRelationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWaliRelationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWaliRelationsInput, UserUncheckedUpdateWithoutWaliRelationsInput>
  }

  export type UserUpdateWithoutWaliRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUpdateOneWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    santriRelations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutWaliRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUncheckedUpdateOneWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    santriRelations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUncheckedUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type UserUpsertWithoutSantriRelationsInput = {
    update: XOR<UserUpdateWithoutSantriRelationsInput, UserUncheckedUpdateWithoutSantriRelationsInput>
    create: XOR<UserCreateWithoutSantriRelationsInput, UserUncheckedCreateWithoutSantriRelationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSantriRelationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSantriRelationsInput, UserUncheckedUpdateWithoutSantriRelationsInput>
  }

  export type UserUpdateWithoutSantriRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUpdateOneWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutSantriRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waliProfile?: WaliProfileUncheckedUpdateOneWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santriProfile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentorClasses?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentorAttendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santriAttendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentorAssignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santriSubmissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    waliRelations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutSantriNestedInput
    mentorDailyJournals?: DailyJournalUncheckedUpdateManyWithoutMentorNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type AssignmentContentCreateManyAssignmentInput = {
    id?: string
    santriId: string
    contentType: $Enums.ContentType
    fileUrl?: AssignmentContentCreatefileUrlInput | string[]
    score?: number | null
    mentorFeedback?: string | null
    status?: $Enums.GradingStatus
    submittedAt?: Date | string
  }

  export type AssignmentContentUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    fileUrl?: AssignmentContentUpdatefileUrlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    santri?: UserUpdateOneRequiredWithoutSantriSubmissionsNestedInput
  }

  export type AssignmentContentUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    fileUrl?: AssignmentContentUpdatefileUrlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentContentUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    fileUrl?: AssignmentContentUpdatefileUrlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyClassInput = {
    id?: string
    santriId: string
    mentorId: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type AssignmentCreateManyClassInput = {
    id?: string
    mentorId: string
    title: string
    description?: string | null
    submissionType: $Enums.SubmissionType
    attachmentUrl?: string | null
    due_date: Date | string
    createdAt?: Date | string
  }

  export type SantriProfileCreateManyClassInput = {
    id?: string
    userId: string
    gender?: $Enums.Gender | null
    phone?: string | null
    birthDate?: Date | string | null
    address?: string | null
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyJournalCreateManyClassInput = {
    id?: string
    santriId: string
    mentorId: string
    attitudeScore?: number
    notes: string
    date: Date | string
    description: string
    tugasType?: $Enums.TugasType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyEvaluationCreateManyClassInput = {
    id?: string
    santriId: string
    month: number
    year: number
    taskAvg?: number
    attendancePoin?: number
    maxAttendPoin?: number
    attitudeAvg?: number
    taskScore?: number
    attendanceScore?: number
    attitudeScore?: number
    finalScore: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    santri?: UserUpdateOneRequiredWithoutSantriAttendancesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentorAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submissionType?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentor?: UserUpdateOneRequiredWithoutMentorAssignmentsNestedInput
    submissions?: AssignmentContentUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submissionType?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AssignmentContentUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submissionType?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SantriProfileUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSantriProfileNestedInput
  }

  export type SantriProfileUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SantriProfileUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyJournalUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    tugasType?: EnumTugasTypeFieldUpdateOperationsInput | $Enums.TugasType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    santri?: UserUpdateOneRequiredWithoutDailyJournalsNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentorDailyJournalsNestedInput
  }

  export type DailyJournalUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    tugasType?: EnumTugasTypeFieldUpdateOperationsInput | $Enums.TugasType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyJournalUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    tugasType?: EnumTugasTypeFieldUpdateOperationsInput | $Enums.TugasType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyEvaluationUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    taskAvg?: FloatFieldUpdateOperationsInput | number
    attendancePoin?: IntFieldUpdateOperationsInput | number
    maxAttendPoin?: IntFieldUpdateOperationsInput | number
    attitudeAvg?: FloatFieldUpdateOperationsInput | number
    taskScore?: FloatFieldUpdateOperationsInput | number
    attendanceScore?: FloatFieldUpdateOperationsInput | number
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    finalScore?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    santri?: UserUpdateOneRequiredWithoutMonthlyEvaluationsNestedInput
  }

  export type MonthlyEvaluationUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    taskAvg?: FloatFieldUpdateOperationsInput | number
    attendancePoin?: IntFieldUpdateOperationsInput | number
    maxAttendPoin?: IntFieldUpdateOperationsInput | number
    attitudeAvg?: FloatFieldUpdateOperationsInput | number
    taskScore?: FloatFieldUpdateOperationsInput | number
    attendanceScore?: FloatFieldUpdateOperationsInput | number
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    finalScore?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyEvaluationUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    taskAvg?: FloatFieldUpdateOperationsInput | number
    attendancePoin?: IntFieldUpdateOperationsInput | number
    maxAttendPoin?: IntFieldUpdateOperationsInput | number
    attitudeAvg?: FloatFieldUpdateOperationsInput | number
    taskScore?: FloatFieldUpdateOperationsInput | number
    attendanceScore?: FloatFieldUpdateOperationsInput | number
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    finalScore?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassCreateManyDivisionInput = {
    id?: string
    name: string
    mentorId: string
    createdAt?: Date | string
  }

  export type ClassUpdateWithoutDivisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentor?: UserUpdateOneRequiredWithoutMentorClassesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    santriProfiles?: SantriProfileUpdateManyWithoutClassNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutClassNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutDivisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    santriProfiles?: SantriProfileUncheckedUpdateManyWithoutClassNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutClassNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutDivisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyUserInput = {
    id?: string
    otpCode: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ClassCreateManyMentorInput = {
    id?: string
    divisiId: string
    name: string
    createdAt?: Date | string
  }

  export type AttendanceCreateManyMentorInput = {
    id?: string
    classId: string
    santriId: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type AttendanceCreateManySantriInput = {
    id?: string
    classId: string
    mentorId: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type AssignmentCreateManyMentorInput = {
    id?: string
    classId: string
    title: string
    description?: string | null
    submissionType: $Enums.SubmissionType
    attachmentUrl?: string | null
    due_date: Date | string
    createdAt?: Date | string
  }

  export type AssignmentContentCreateManySantriInput = {
    id?: string
    assignmentId: string
    contentType: $Enums.ContentType
    fileUrl?: AssignmentContentCreatefileUrlInput | string[]
    score?: number | null
    mentorFeedback?: string | null
    status?: $Enums.GradingStatus
    submittedAt?: Date | string
  }

  export type WaliSantriRelationCreateManyWaliInput = {
    id?: string
    santriId: string
    category?: $Enums.WaliSantriCategory
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaliSantriRelationCreateManySantriInput = {
    id?: string
    waliId: string
    category?: $Enums.WaliSantriCategory
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyJournalCreateManySantriInput = {
    id?: string
    classId: string
    mentorId: string
    attitudeScore?: number
    notes: string
    date: Date | string
    description: string
    tugasType?: $Enums.TugasType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyJournalCreateManyMentorInput = {
    id?: string
    santriId: string
    classId: string
    attitudeScore?: number
    notes: string
    date: Date | string
    description: string
    tugasType?: $Enums.TugasType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyEvaluationCreateManySantriInput = {
    id?: string
    classId: string
    month: number
    year: number
    taskAvg?: number
    attendancePoin?: number
    maxAttendPoin?: number
    attitudeAvg?: number
    taskScore?: number
    attendanceScore?: number
    attitudeScore?: number
    finalScore: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    division?: DivisionUpdateOneRequiredWithoutClassesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    santriProfiles?: SantriProfileUpdateManyWithoutClassNestedInput
    dailyJournals?: DailyJournalUpdateManyWithoutClassNestedInput
    monthlyEvaluations?: MonthlyEvaluationUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    divisiId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    santriProfiles?: SantriProfileUncheckedUpdateManyWithoutClassNestedInput
    dailyJournals?: DailyJournalUncheckedUpdateManyWithoutClassNestedInput
    monthlyEvaluations?: MonthlyEvaluationUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    divisiId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAttendancesNestedInput
    santri?: UserUpdateOneRequiredWithoutSantriAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAttendancesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentorAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submissionType?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAssignmentsNestedInput
    submissions?: AssignmentContentUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submissionType?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AssignmentContentUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submissionType?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentContentUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    fileUrl?: AssignmentContentUpdatefileUrlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type AssignmentContentUncheckedUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    fileUrl?: AssignmentContentUpdatefileUrlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentContentUncheckedUpdateManyWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    fileUrl?: AssignmentContentUpdatefileUrlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentorFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaliSantriRelationUpdateWithoutWaliInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    santri?: UserUpdateOneRequiredWithoutSantriRelationsNestedInput
  }

  export type WaliSantriRelationUncheckedUpdateWithoutWaliInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaliSantriRelationUncheckedUpdateManyWithoutWaliInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaliSantriRelationUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wali?: UserUpdateOneRequiredWithoutWaliRelationsNestedInput
  }

  export type WaliSantriRelationUncheckedUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    waliId?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaliSantriRelationUncheckedUpdateManyWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    waliId?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyJournalUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    tugasType?: EnumTugasTypeFieldUpdateOperationsInput | $Enums.TugasType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutDailyJournalsNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentorDailyJournalsNestedInput
  }

  export type DailyJournalUncheckedUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    tugasType?: EnumTugasTypeFieldUpdateOperationsInput | $Enums.TugasType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyJournalUncheckedUpdateManyWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    mentorId?: StringFieldUpdateOperationsInput | string
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    tugasType?: EnumTugasTypeFieldUpdateOperationsInput | $Enums.TugasType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyJournalUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    tugasType?: EnumTugasTypeFieldUpdateOperationsInput | $Enums.TugasType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutDailyJournalsNestedInput
    santri?: UserUpdateOneRequiredWithoutDailyJournalsNestedInput
  }

  export type DailyJournalUncheckedUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    tugasType?: EnumTugasTypeFieldUpdateOperationsInput | $Enums.TugasType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyJournalUncheckedUpdateManyWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    santriId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    tugasType?: EnumTugasTypeFieldUpdateOperationsInput | $Enums.TugasType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyEvaluationUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    taskAvg?: FloatFieldUpdateOperationsInput | number
    attendancePoin?: IntFieldUpdateOperationsInput | number
    maxAttendPoin?: IntFieldUpdateOperationsInput | number
    attitudeAvg?: FloatFieldUpdateOperationsInput | number
    taskScore?: FloatFieldUpdateOperationsInput | number
    attendanceScore?: FloatFieldUpdateOperationsInput | number
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    finalScore?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutMonthlyEvaluationsNestedInput
  }

  export type MonthlyEvaluationUncheckedUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    taskAvg?: FloatFieldUpdateOperationsInput | number
    attendancePoin?: IntFieldUpdateOperationsInput | number
    maxAttendPoin?: IntFieldUpdateOperationsInput | number
    attitudeAvg?: FloatFieldUpdateOperationsInput | number
    taskScore?: FloatFieldUpdateOperationsInput | number
    attendanceScore?: FloatFieldUpdateOperationsInput | number
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    finalScore?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyEvaluationUncheckedUpdateManyWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    taskAvg?: FloatFieldUpdateOperationsInput | number
    attendancePoin?: IntFieldUpdateOperationsInput | number
    maxAttendPoin?: IntFieldUpdateOperationsInput | number
    attitudeAvg?: FloatFieldUpdateOperationsInput | number
    taskScore?: FloatFieldUpdateOperationsInput | number
    attendanceScore?: FloatFieldUpdateOperationsInput | number
    attitudeScore?: FloatFieldUpdateOperationsInput | number
    finalScore?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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