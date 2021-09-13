initSidebarItems({"enum":[["AggExpr",""],["AnyValue",""],["ApplyOptions",""],["ArrowDataType","The set of datatypes that are supported by this implementation of Apache Arrow."],["CsvEncoding",""],["DataType",""],["Expr","Queries consists of multiple expressions."],["FillNullStrategy",""],["InitFold",""],["JoinType",""],["LiteralValue",""],["LogicalPlan",""],["NullValues",""],["Operator",""],["PolarsError",""],["RankMethod",""],["TakeIdx","One of the three arguments allowed in unchecked_take"],["TakeRandBranch2",""],["TakeRandBranch3",""],["TimeUnit","Time units defined in Arrow."]],"fn":[["all_exprs","Evaluate all the expressions with a bitwise and"],["any_exprs","Evaluate all the expressions with a bitwise or"],["avg","Find the mean of all the values in this Expression."],["binary_expr",""],["cast","Cast expression."],["col","Create a Column Expression based on a column name."],["cols","Select multiple columns by name"],["count","Count the number of values in this Expression."],["fold_exprs","Accumulate over multiple columns horizontally / row wise."],["is_not_null","IsNotNull expression."],["is_null","IsNull expression"],["lit","Create a Literal Expression from `L`"],["map_binary","Apply a closure on the two columns that are evaluated from `Expr` a and `Expr` b."],["map_binary_lazy_field","Binary function where the output type is determined at runtime when the schema is known."],["max","Find the maximum of all the values in this Expression."],["max_exprs","Get the the minimum value per row"],["mean","Find the mean of all the values in this Expression."],["median","Find the median of all the values in this Expression."],["min","Find the minimum of all the values in this Expression."],["min_exprs","Get the the minimum value per row"],["naive_date_to_date32",""],["naive_datetime_to_date32",""],["naive_datetime_to_date64",""],["not","Not expression."],["parse_naive_date_from_str",""],["parse_naive_datetime_from_str",""],["quantile","Find a specific quantile of all the values in this Expression."],["range","Create a range literal."],["resolve_homedir",""],["sum","Sum all the values in this Expression."],["sum_exprs","Get the the sum of the values per row"],["ternary_expr",""],["when","Start a when-then-otherwise expression"]],"mod":[["datatypes","Data types supported by Polars."],["write",""]],"struct":[["AggregationContext",""],["Arc","A thread-safe reference-counting pointer. ‘Arc’ stands for ‘Atomically Reference Counted’."],["Arena",""],["ArrowField","A logical [`DataType`] and its associated metadata per Arrow specification"],["ArrowJsonReader","JSON Reader"],["ArrowSchema","An ordered sequence of [`Field`] with optional metadata."],["BoolTakeRandom",""],["BoolTakeRandomSingleChunk",""],["BooleanChunkedBuilder",""],["BooleanType",""],["CategoricalType",""],["ChunkedArray","ChunkedArray"],["CsvReader","Create a new DataFrame by reading a csv file."],["CsvWriter","Write a DataFrame to csv."],["DataFrame",""],["Date32Type",""],["Date64Type",""],["DefaultPlanner",""],["DurationMillisecondType",""],["DurationNanosecondType",""],["Field",""],["Float32Type",""],["Float64Type",""],["FunctionOptions",""],["Int16Type",""],["Int32Type",""],["Int64Type",""],["Int8Type",""],["IpcReader","Read Arrows IPC format into a DataFrame"],["IpcWriter","Write a DataFrame to Arrow’s IPC format"],["JoinBuilder",""],["JoinOptions",""],["JsonReader",""],["JsonWriter",""],["LazyCsvReader",""],["LazyFrame","Lazy abstraction over an eager `DataFrame`. It really is an abstraction over a logical plan. The methods of this struct will incrementally modify a logical plan until output is requested (via collect)"],["LazyGroupBy","Utility struct for lazy groupby operation."],["ListBooleanChunkedBuilder",""],["ListPrimitiveChunkedBuilder",""],["ListTakeRandom",""],["ListTakeRandomSingleChunk",""],["ListType",""],["ListUtf8ChunkedBuilder",""],["LogicalPlanBuilder",""],["NoEq","Wrapper type that indicates that the inner type is not equal to anything"],["NoNull","Just a wrapper structure. Useful for certain impl specializations This is for instance use to implement `impl<T> FromIterator<T::Native> for NoNull<ChunkedArray<T>>` as `Option<T::Native>` was already implemented: `impl<T> FromIterator<Option<T::Native>> for ChunkedArray<T>`"],["Node",""],["Null","The literal Null"],["NumTakeRandomChunked",""],["NumTakeRandomCont",""],["NumTakeRandomSingleChunk",""],["ObjectTakeRandom",""],["ObjectTakeRandomSingleChunk",""],["ObjectType",""],["OptState","State of the allowed optimizations"],["ParquetReader","Read Apache parquet format into a DataFrame."],["ParquetWriter","Write a DataFrame to parquet format"],["PhysicalIoHelper","Wrapper struct that allow us to use a PhysicalExpr in polars-io."],["PrimitiveChunkedBuilder",""],["ReaderBuilder","JSON file reader builder"],["RecordBatch","A two-dimensional batch of column-oriented data with a defined schema."],["Schema",""],["Series","Series"],["Time64NanosecondType",""],["TypeCoercionRule",""],["UInt16Type",""],["UInt32Type",""],["UInt64Type",""],["UInt8Type",""],["Utf8ChunkedBuilder",""],["Utf8TakeRandom",""],["Utf8TakeRandomSingleChunk",""],["Utf8Type",""],["When","Intermediate state of `when(..).then(..).otherwise(..)` expr."],["WhenThen","Intermediate state of `when(..).then(..).otherwise(..)` expr."],["WhenThenThen","Intermediate state of chain when then exprs."],["WindowOptions",""]],"trait":[["ArgAgg","Argmin/ Argmax"],["AsDuration",""],["AsNaiveDate",""],["AsNaiveDateTime",""],["AsNaiveTime",""],["BinaryUdfOutputField",""],["ChunkAgg","Aggregation operations"],["ChunkAggSeries","Aggregations that return Series of unit length. Those can be used in broadcasting operations."],["ChunkAnyValue",""],["ChunkApply","Fastest way to do elementwise operations on a ChunkedArray when the operation is cheaper than branching due to null checking"],["ChunkApplyKernel","Apply kernels on the arrow array chunks in a ChunkedArray."],["ChunkBytes",""],["ChunkCast","Cast `ChunkedArray<T>` to `ChunkedArray<N>`"],["ChunkCompare","Compare Series and ChunkedArray’s and get a `boolean` mask that can be used to filter rows."],["ChunkCumAgg",""],["ChunkExpandAtIndex","Create a new ChunkedArray filled with values at that index."],["ChunkExplode","Explode/ flatten a"],["ChunkFillNull","Replace None values with various strategies"],["ChunkFillNullValue","Replace None values with a value"],["ChunkFilter","Filter values by a boolean mask."],["ChunkFull","Fill a ChunkedArray with one value."],["ChunkFullNull",""],["ChunkOps",""],["ChunkPeaks","Find local minima/ maxima"],["ChunkReverse","Reverse a ChunkedArray"],["ChunkRollApply","This differs from ChunkWindowCustom and ChunkWindow by not using a fold aggregator, but reusing a `Series` wrapper and calling `Series` aggregators. This likely is a bit slower than ChunkWindow"],["ChunkSet","Create a `ChunkedArray` with new values by index or by boolean mask. Note that these operations clone data. This is however the only way we can modify at mask or index level as the underlying Arrow arrays are immutable."],["ChunkShift",""],["ChunkShiftFill","Shift the values of a ChunkedArray by a number of periods."],["ChunkSort","Sort operations on `ChunkedArray`."],["ChunkTake","Fast access by index."],["ChunkTakeEvery","Traverse and collect every nth element"],["ChunkUnique","Get unique values in a `ChunkedArray`"],["ChunkVar","Variance and standard deviation aggregation."],["ChunkWindow","Rolling window functions"],["ChunkWindowCustom","Custom rolling window functions"],["ChunkZip","Combine 2 ChunkedArrays based on some predicate."],["ChunkedBuilder",""],["DataFrameUdf",""],["Executor","Executors will evaluate physical expressions and collect them in a DataFrame."],["FromNaiveDate",""],["FromNaiveDateTime",""],["FromNaiveTime",""],["FunctionOutputField",""],["Interpolate",""],["IntoLazy",""],["IntoNoNullIterator","Trait for ChunkedArrays that don’t have null values. The result is the most efficient implementation `Iterator`, according to the number of chunks."],["IntoSeries",""],["IntoTakeRandom","Create a type that implements a faster `TakeRandom`."],["IntoVec",""],["IsFirst",""],["IsIn","Check if element is member of list array"],["IsLast",""],["LhsNumOps",""],["ListBuilderTrait",""],["Literal",""],["NamedFrom",""],["NewChunkedArray",""],["NumComp",""],["NumOpsDispatch",""],["NumOpsDispatchChecked",""],["Optimize",""],["PhysicalAggregation",""],["PhysicalExpr","Take a DataFrame and evaluate the expressions. Implement this for Column, lt, eq, etc"],["PhysicalPlanner","A type that implements this transforms a LogicalPlan to a physical plan."],["PolarsDataType",""],["PolarsFloatType",""],["PolarsIntegerType",""],["PolarsIterator","A `PolarsIterator` is an iterator over a `ChunkedArray` which contains polars types. A `PolarsIterator` must implement `ExactSizeIterator` and `DoubleEndedIterator`."],["PolarsNumericType",""],["PolarsObject","Values need to implement this so that they can be stored into a Series and DataFrame"],["PolarsPrimitiveType",""],["PolarsSingleType","Any type that is not nested"],["Pow",""],["Range",""],["Reinterpret",""],["RepeatBy","Repeat the values `n` times."],["SerReader",""],["SerWriter",""],["SeriesBinaryUdf","A wrapper trait for any binary closure `Fn(Series, Series) -> Result<Series>`"],["SeriesTrait",""],["SeriesUdf","A wrapper trait for any closure `Fn(Vec<Series>) -> Result<Series>`"],["TakeIterator",""],["TakeIteratorNulls",""],["TakeRandom","Random access"],["TakeRandomUtf8",""],["ToDummies",""],["ToPolarsType",""],["VarAggSeries",""],["VecHash",""]],"type":[["AlignedVec",""],["AllowedOptimizations","AllowedOptimizations"],["ArrowResult","Typedef for a [`std::result::Result`] of an [`ArrowError`]."],["BooleanChunked",""],["CategoricalChunked",""],["Date32Chunked",""],["Date64Chunked",""],["Dummy","Dummy type, we need to instantiate all generic types, so we fill one with a dummy."],["DurationMillisecondChunked",""],["DurationNanosecondChunked",""],["Float32Chunked",""],["Float64Chunked",""],["GetOutput",""],["Int16Chunked",""],["Int32Chunked",""],["Int64Chunked",""],["Int8Chunked",""],["LargeListArray",""],["LargeStringArray",""],["ListChunked",""],["ObjectChunked",""],["PlHashMap",""],["PlHashSet",""],["Result",""],["SchemaRef",""],["Time64NanosecondChunked",""],["UInt16Chunked",""],["UInt32Chunked",""],["UInt64Chunked",""],["UInt8Chunked",""],["Utf8Chunked",""]]});