(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{341:function(e,t,a){"use strict";a.r(t);var r=a(4),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"适配器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适配器模式"}},[e._v("#")]),e._v(" 适配器模式")]),e._v(" "),t("p",[t("strong",[e._v("适配器模式 (Adapter Pattern)")]),e._v("：将一个接口转换成客户希望的另一个接口，使接口不兼容的那些类可以一起工作，其别名为包装器 (Wrapper)。适配器模式既可以作为类结构型模式，也可以作为对象结构型模式。")]),e._v(" "),t("p",[e._v("在适配器模式中，我们通过增加一个新的适配器类来解决接口不兼容的问题，使得原本没有任何关系的类可以协同工作。")]),e._v(" "),t("p",[e._v("根据适配器类与适配者类的关系不同，适配器模式可分为对象适配器和类适配器两种，在"),t("strong",[e._v("对象适配器模式")]),e._v("中，适配器与适配者之间是"),t("strong",[e._v("关联")]),e._v("关系；在"),t("strong",[e._v("类适配器模式")]),e._v("中，适配器与适配者之间是"),t("strong",[e._v("继承")]),e._v("（或实现）关系。")]),e._v(" "),t("h4",{attrs:{id:"角色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#角色"}},[e._v("#")]),e._v(" 角色")]),e._v(" "),t("p",[t("strong",[e._v("Target（目标抽象类）")]),e._v("：目标抽象类定义客户所需接口，可以是一个抽象类或接口，也可以是具体类。")]),e._v(" "),t("p",[t("strong",[e._v("Adapter（适配器类）")]),e._v("：适配器可以调用另一个接口，作为一个转换器，对 Adaptee 和 Target 进行适配，适配器类是适配器模式的核心，在对象适配器中，它通过继承 Target 并关联一个 Adaptee 对象使二者产生联系。")]),e._v(" "),t("p",[t("strong",[e._v("Adaptee（适配者类）")]),e._v("：适配者即被适配的角色，它定义了一个已经存在的接口，这个接口需要适配，适配者类一般是一个具体类，包含了客户希望使用的业务方法，在某些情况下可能没有适配者类的源代码。")]),e._v(" "),t("blockquote",[t("p",[e._v("缺省适配器模式 (Default Adapter Pattern)：当不需要实现一个接口所提供的所有方法时，可先设计一个抽象类实现该接口，并为接口中每个方法提供一个默认实现（空方法），那么该抽象类的子类可以选择性地覆盖父类的某些方法来实现需求，它适用于不想使用一个接口中的所有方法的情况，又称为单接口适配器模式。缺省适配器模式是适配器模式的一种变体，其应用也较为广泛。在 JDK 类库的事件处理包 java.awt.event 中广泛使用了缺省适配器模式，如 WindowAdapter、KeyAdapter、MouseAdapter 等。")])]),e._v(" "),t("h3",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),t("h4",{attrs:{id:"类适配器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类适配器"}},[e._v("#")]),e._v(" 类适配器")]),e._v(" "),t("p",[e._v("首先有一个已存在的将被适配的类")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class Adaptee {\n    public void adapteeRequest() {\n        System.out.println("被适配者的方法");\n    }\n}\n')])])]),t("p",[e._v("定义一个目标接口")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public interface Target {\n    void request();\n}\n")])])]),t("p",[e._v("怎么才可以在目标接口中的 "),t("code",[e._v("request()")]),e._v(" 调用 "),t("code",[e._v("Adaptee")]),e._v(" 的 "),t("code",[e._v("adapteeRequest()")]),e._v(" 方法呢？")]),e._v(" "),t("p",[e._v("如果直接实现 "),t("code",[e._v("Target")]),e._v(" 是不行的")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class ConcreteTarget implements Target {\n    @Override\n    public void request() {\n        System.out.println("concreteTarget目标方法");\n    }\n}\n')])])]),t("p",[e._v("如果通过一个适配器类，实现 "),t("code",[e._v("Target")]),e._v(" 接口，同时继承了 "),t("code",[e._v("Adaptee")]),e._v(" 类，然后在实现的 "),t("code",[e._v("request()")]),e._v(" 方法中调用父类的 "),t("code",[e._v("adapteeRequest()")]),e._v(" 即可实现")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public class Adapter extends Adaptee implements Target{\n    @Override\n    public void request() {\n        //...一些操作...\n        super.adapteeRequest();\n        //...一些操作...\n    }\n}\n")])])]),t("p",[e._v("我们来测试一下")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public class Test {\n    public static void main(String[] args) {\n        Target target = new ConcreteTarget();\n        target.request();\n\n        Target adapterTarget = new Adapter();\n        adapterTarget.request();\n    }\n}\n")])])]),t("p",[e._v("输出")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("concreteTarget目标方法\n被适配者的方法\n")])])]),t("p",[t("img",{attrs:{src:"http://img.jssjqd.cn/aHR0cDovL2ltYWdlLmxhaWppYW5mZW5nLm9yZy9QYWNrYWdlJTIwY2xhc3NhZGFwdGVyLnBuZw",alt:""}})]),e._v(" "),t("p",[e._v("这样我们即可在新接口 "),t("code",[e._v("Target")]),e._v(" 中适配旧的接口或类")]),e._v(" "),t("h4",{attrs:{id:"对象适配器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象适配器"}},[e._v("#")]),e._v(" 对象适配器")]),e._v(" "),t("p",[e._v("对象适配器与类适配器不同之处在于，类适配器通过继承来完成适配，对象适配器则是通过关联来完成，这里稍微修改一下 "),t("code",[e._v("Adapter")]),e._v(" 类即可将转变为对象适配器")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public class Adapter implements Target{\n    // 适配者是对象适配器的一个属性\n    private Adaptee adaptee = new Adaptee();\n\n    @Override\n    public void request() {\n        //...\n        adaptee.adapteeRequest();\n        //...\n    }\n}\n")])])]),t("p",[t("img",{attrs:{src:"http://img.jssjqd.cn/aHR0cDovL2ltYWdlLmxhaWppYW5mZW5nLm9yZy8yMDE4MDkxOVBhY2thZ2Vfb2JqZWN0YWRhcHRlci5wbmc",alt:""}})]),e._v(" "),t("p",[e._v("注意这里的 "),t("code",[e._v("Adapter")]),e._v(" 是将 "),t("code",[e._v("Adaptee")]),e._v(" 作为一个成员属性，而不是继承它")]),e._v(" "),t("h4",{attrs:{id:"电压适配器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#电压适配器"}},[e._v("#")]),e._v(" 电压适配器")]),e._v(" "),t("p",[e._v("再来一个好理解的例子，我们国家的民用电都是 220V，日本是 110V，而我们的手机充电一般需要 5V，这时候要充电，就需要一个电压适配器，将 220V 或者 100V 的输入电压变换为 5V 输出")]),e._v(" "),t("p",[e._v("定义输出交流电接口，输出 220V 交流电类和输出 110V 交流电类")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("int outputAC();\n}\n\npublic class AC110 implements AC {\n    public final int output = 110;\n\n    @Override\n    public int outputAC() {\n        return output;\n    }\n}\n\npublic class AC220 implements AC {\n    public final int output = 220;\n\n    @Override\n    public int outputAC() {\n        return output;\n    }\n}\n")])])]),t("p",[e._v("适配器接口，其中 "),t("code",[e._v("support()")]),e._v(" 方法用于检查输入的电压是否与适配器匹配，"),t("code",[e._v("outputDC5V()")]),e._v(" 方法则用于将输入的电压变换为 5V 后输出")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public interface DC5Adapter {\n    boolean support(AC ac);\n\n    int outputDC5V(AC ac);\n}\n")])])]),t("p",[e._v("实现中国变压适配器和日本变压适配器")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class ChinaPowerAdapter implements DC5Adapter {\n    public static final int voltage = 220;\n    \n    @Override\n    public boolean support(AC ac) {\n        return (voltage == ac.outputAC());\n    }\n    \n    @Override\n    public int outputDC5V(AC ac) {\n        int adapterInput = ac.outputAC();\n        //变压器...\n        int adapterOutput = adapterInput / 44;\n        System.out.println("使用ChinaPowerAdapter变压适配器，输入AC:" + adapterInput + "V" + "，输出DC:" + adapterOutput + "V");\n        return adapterOutput;\n    }\n}\n\npublic class JapanPowerAdapter implements DC5Adapter {\n    public static final int voltage = 110;\n\n    @Override\n    public boolean support(AC ac) {\n        return (voltage == ac.outputAC());\n    }\n\n    @Override\n    public int outputDC5V(AC ac) {\n        int adapterInput = ac.outputAC();\n        //变压器...\n        int adapterOutput = adapterInput / 22;\n        System.out.println("使用JapanPowerAdapter变压适配器，输入AC:" + adapterInput + "V" + "，输出DC:" + adapterOutput + "V");\n        return adapterOutput;\n    }\n}\n')])])]),t("p",[e._v("测试，准备中国变压适配器和日本变压适配器各一个，定义一个方法可以根据电压找到合适的变压器，然后进行测试")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class Test {\n    private List<DC5Adapter> adapters = new LinkedList<DC5Adapter>();\n\n    public Test() {\n        this.adapters.add(new ChinaPowerAdapter());\n        this.adapters.add(new JapanPowerAdapter());\n    }\n\n    // 根据电压找合适的变压器\n    public DC5Adapter getPowerAdapter(AC ac) {\n        DC5Adapter adapter = null;\n        for (DC5Adapter ad : this.adapters) {\n            if (ad.support(ac)) {\n                adapter = ad;\n                break;\n            }\n        }\n        if (adapter == null){\n            throw new  IllegalArgumentException("没有找到合适的变压适配器");\n        }\n        return adapter;\n    }\n\n    public static void main(String[] args) {\n        Test test = new Test();\n        AC chinaAC = new AC220();\n        DC5Adapter adapter = test.getPowerAdapter(chinaAC);\n        adapter.outputDC5V(chinaAC);\n\n        // 去日本旅游，电压是 110V\n        AC japanAC = new AC110();\n        adapter = test.getPowerAdapter(japanAC);\n        adapter.outputDC5V(japanAC);\n    }\n}\n')])])]),t("p",[e._v("输出")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("使用ChinaPowerAdapter变压适配器，输入AC:220V，输出DC:5V\n使用JapanPowerAdapter变压适配器，输入AC:110V，输出DC:5V\n")])])]),t("h3",{attrs:{id:"适配器模式总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适配器模式总结"}},[e._v("#")]),e._v(" 适配器模式总结")]),e._v(" "),t("p",[t("strong",[e._v("主要优点")]),e._v("：")]),e._v(" "),t("ol",[t("li",[e._v("将目标类和适配者类解耦，通过引入一个适配器类来重用现有的适配者类，无须修改原有结构。")]),e._v(" "),t("li",[e._v("增加了类的透明性和复用性，将具体的业务实现过程封装在适配者类中，对于客户端类而言是透明的，而且提高了适配者的复用性，同一个适配者类可以在多个不同的系统中复用。")]),e._v(" "),t("li",[e._v("灵活性和扩展性都非常好，通过使用配置文件，可以很方便地更换适配器，也可以在不修改原有代码的基础上增加新的适配器类，完全符合 “开闭原则”。")])]),e._v(" "),t("p",[e._v("具体来说，类适配器模式还有如下优点：")]),e._v(" "),t("ul",[t("li",[e._v("由于适配器类是适配者类的子类，因此可以在适配器类中置换一些适配者的方法，使得适配器的灵活性更强。")])]),e._v(" "),t("p",[e._v("对象适配器模式还有如下优点：")]),e._v(" "),t("ul",[t("li",[e._v("一个对象适配器可以把多个不同的适配者适配到同一个目标；")]),e._v(" "),t("li",[e._v("可以适配一个适配者的子类，由于适配器和适配者之间是关联关系，根据 “里氏代换原则”，适配者的子类也可通过该适配器进行适配。")])]),e._v(" "),t("p",[e._v("类适配器模式的缺点如下：")]),e._v(" "),t("ol",[t("li",[e._v("对于 Java、C# 等不支持多重类继承的语言，一次最多只能适配一个适配者类，不能同时适配多个适配者；")]),e._v(" "),t("li",[e._v("适配者类不能为最终类，如在 Java 中不能为 final 类，C# 中不能为 sealed 类；")]),e._v(" "),t("li",[e._v("在 Java、C# 等语言中，类适配器模式中的目标抽象类只能为接口，不能为类，其使用有一定的局限性。")])]),e._v(" "),t("p",[e._v("对象适配器模式的缺点如下：")]),e._v(" "),t("ul",[t("li",[e._v("与类适配器模式相比，要在适配器中置换适配者类的某些方法比较麻烦。如果一定要置换掉适配者类的一个或多个方法，可以先做一个适配者类的子类，将适配者类的方法置换掉，然后再把适配者类的子类当做真正的适配者进行适配，实现过程较为复杂。")])]),e._v(" "),t("p",[t("strong",[e._v("适用场景")]),e._v("：")]),e._v(" "),t("ul",[t("li",[e._v("系统需要使用一些现有的类，而这些类的接口（如方法名）不符合系统的需要，甚至没有这些类的源代码。")]),e._v(" "),t("li",[e._v("想创建一个可以重复使用的类，用于与一些彼此之间没有太大关联的一些类，包括一些可能在将来引进的类一起工作。")])]),e._v(" "),t("h3",{attrs:{id:"源码分析适配器模式的典型应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码分析适配器模式的典型应用"}},[e._v("#")]),e._v(" 源码分析适配器模式的典型应用")]),e._v(" "),t("h4",{attrs:{id:"spring-aop-中的适配器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-aop-中的适配器模式"}},[e._v("#")]),e._v(" spring AOP 中的适配器模式")]),e._v(" "),t("p",[e._v("在 Spring 的 Aop 中，使用的 "),t("code",[e._v("Advice（通知）")]),e._v(" 来增强被代理类的功能。")]),e._v(" "),t("p",[t("code",[e._v("Advice")]),e._v("的类型有："),t("code",[e._v("MethodBeforeAdvice")]),e._v("、"),t("code",[e._v("AfterReturningAdvice")]),e._v("、"),t("code",[e._v("ThrowsAdvice")])]),e._v(" "),t("p",[e._v("在每个类型 "),t("code",[e._v("Advice")]),e._v(" 都有对应的拦截器，"),t("code",[e._v("MethodBeforeAdviceInterceptor")]),e._v("、"),t("code",[e._v("AfterReturningAdviceInterceptor")]),e._v("、"),t("code",[e._v("ThrowsAdviceInterceptor")])]),e._v(" "),t("p",[e._v("Spring 需要将每个 "),t("code",[e._v("Advice")]),e._v(" "),t("strong",[e._v("都封装成对应的拦截器类型")]),e._v("，返回给容器，所以需要使用适配器模式对 "),t("code",[e._v("Advice")]),e._v(" 进行转换")]),e._v(" "),t("p",[e._v("三个适配者类 Adaptee 如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public interface MethodBeforeAdvice extends BeforeAdvice {\n    void before(Method var1, Object[] var2, @Nullable Object var3) throws Throwable;\n}\n\npublic interface AfterReturningAdvice extends AfterAdvice {\n    void afterReturning(@Nullable Object var1, Method var2, Object[] var3, @Nullable Object var4) throws Throwable;\n}\n\npublic interface ThrowsAdvice extends AfterAdvice {\n}\n")])])]),t("p",[e._v("目标接口 Target，有两个方法，一个判断 "),t("code",[e._v("Advice")]),e._v(" 类型是否匹配，一个是工厂方法，创建对应类型的 "),t("code",[e._v("Advice")]),e._v(" 对应的拦截器")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public interface AdvisorAdapter {\n    boolean supportsAdvice(Advice var1);\n\n    MethodInterceptor getInterceptor(Advisor var1);\n}\n")])])]),t("p",[e._v("三个适配器类 Adapter 分别如下，注意其中的 Advice、Adapter、Interceptor 之间的对应关系")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('class MethodBeforeAdviceAdapter implements AdvisorAdapter, Serializable {\n\t@Override\n\tpublic boolean supportsAdvice(Advice advice) {\n\t\treturn (advice instanceof MethodBeforeAdvice);\n\t}\n\n\t@Override\n\tpublic MethodInterceptor getInterceptor(Advisor advisor) {\n\t\tMethodBeforeAdvice advice = (MethodBeforeAdvice) advisor.getAdvice();\n\t\treturn new MethodBeforeAdviceInterceptor(advice);\n\t}\n}\n\n@SuppressWarnings("serial")\nclass AfterReturningAdviceAdapter implements AdvisorAdapter, Serializable {\n\t@Override\n\tpublic boolean supportsAdvice(Advice advice) {\n\t\treturn (advice instanceof AfterReturningAdvice);\n\t}\n\t@Override\n\tpublic MethodInterceptor getInterceptor(Advisor advisor) {\n\t\tAfterReturningAdvice advice = (AfterReturningAdvice) advisor.getAdvice();\n\t\treturn new AfterReturningAdviceInterceptor(advice);\n\t}\n}\n\nclass ThrowsAdviceAdapter implements AdvisorAdapter, Serializable {\n\t@Override\n\tpublic boolean supportsAdvice(Advice advice) {\n\t\treturn (advice instanceof ThrowsAdvice);\n\t}\n\t@Override\n\tpublic MethodInterceptor getInterceptor(Advisor advisor) {\n\t\treturn new ThrowsAdviceInterceptor(advisor.getAdvice());\n\t}\n}\n')])])]),t("p",[e._v("客户端 DefaultAdvisorAdapterRegistry")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public class DefaultAdvisorAdapterRegistry implements AdvisorAdapterRegistry, Serializable {\n    private final List<AdvisorAdapter> adapters = new ArrayList(3);\n\n    public DefaultAdvisorAdapterRegistry() {\n        // 这里注册了适配器\n        this.registerAdvisorAdapter(new MethodBeforeAdviceAdapter());\n        this.registerAdvisorAdapter(new AfterReturningAdviceAdapter());\n        this.registerAdvisorAdapter(new ThrowsAdviceAdapter());\n    }\n    \n    public MethodInterceptor[] getInterceptors(Advisor advisor) throws UnknownAdviceTypeException {\n        List<MethodInterceptor> interceptors = new ArrayList(3);\n        Advice advice = advisor.getAdvice();\n        if (advice instanceof MethodInterceptor) {\n            interceptors.add((MethodInterceptor)advice);\n        }\n\n        Iterator var4 = this.adapters.iterator();\n\n        while(var4.hasNext()) {\n            AdvisorAdapter adapter = (AdvisorAdapter)var4.next();\n            if (adapter.supportsAdvice(advice)) {   // 这里调用适配器方法\n                interceptors.add(adapter.getInterceptor(advisor));  // 这里调用适配器方法\n            }\n        }\n\n        if (interceptors.isEmpty()) {\n            throw new UnknownAdviceTypeException(advisor.getAdvice());\n        } else {\n            return (MethodInterceptor[])interceptors.toArray(new MethodInterceptor[0]);\n        }\n    }\n    // ...省略...\n}\n")])])]),t("p",[e._v("这里看 while 循环里，逐个取出注册的适配器，调用 "),t("code",[e._v("supportsAdvice()")]),e._v(" 方法来判断 "),t("code",[e._v("Advice")]),e._v(" 对应的类型，然后调用 "),t("code",[e._v("getInterceptor()")]),e._v(" 创建对应类型的拦截器")]),e._v(" "),t("p",[t("img",{attrs:{src:"http://img.jssjqd.cn/aHR0cDovL2ltYWdlLmxhaWppYW5mZW5nLm9yZy8yMDE4MDkxOV8yMjE3LmpwZw",alt:""}})]),e._v(" "),t("p",[e._v("这里应该属于对象适配器模式，关键字 "),t("code",[e._v("instanceof")]),e._v(" 可看成是 "),t("code",[e._v("Advice")]),e._v(" 的方法，不过这里的 "),t("code",[e._v("Advice")]),e._v(" 对象是从外部传进来，而不是成员属性")]),e._v(" "),t("h4",{attrs:{id:"spring-jpa-中的适配器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-jpa-中的适配器模式"}},[e._v("#")]),e._v(" spring JPA 中的适配器模式")]),e._v(" "),t("p",[e._v("在 Spring 的 ORM 包中，对于 JPA 的支持也是采用了适配器模式，首先定义了一个接口的 "),t("code",[e._v("JpaVendorAdapter")]),e._v("，然后不同的持久层框架都实现此接口。")]),e._v(" "),t("p",[e._v("jpaVendorAdapter：用于设置实现厂商 JPA 实现的特定属性，如设置 Hibernate 的是否自动生成 DDL 的属性 generateDdl；这些属性是厂商特定的，因此最好在这里设置；目前 Spring 提供 "),t("code",[e._v("HibernateJpaVendorAdapter")]),e._v("、"),t("code",[e._v("OpenJpaVendorAdapter")]),e._v("、"),t("code",[e._v("EclipseLinkJpaVendorAdapter")]),e._v("、"),t("code",[e._v("TopLinkJpaVendorAdapter")]),e._v(" 四个实现。其中最重要的属性是 database，用来指定使用的数据库类型，从而能"),t("strong",[e._v("根据数据库类型来决定比如如何将数据库特定异常转换为 Spring 的一致性异常")]),e._v("，目前支持如下数据库（DB2、DERBY、H2、HSQL、INFORMIX、MYSQL、ORACLE、POSTGRESQL、SQL_SERVER、SYBASE）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public interface JpaVendorAdapter\n{\n  // 返回一个具体的持久层提供者\n  public abstract PersistenceProvider getPersistenceProvider();\n\n  // 返回持久层提供者的包名\n  public abstract String getPersistenceProviderRootPackage();\n\n  // 返回持久层提供者的属性\n  public abstract Map<String, ?> getJpaPropertyMap();\n\n  // 返回JpaDialect\n  public abstract JpaDialect getJpaDialect();\n\n  // 返回持久层管理器工厂\n  public abstract Class<? extends EntityManagerFactory> getEntityManagerFactoryInterface();\n\n  // 返回持久层管理器\n  public abstract Class<? extends EntityManager> getEntityManagerInterface();\n\n  // 自定义回调方法\n  public abstract void postProcessEntityManagerFactory(EntityManagerFactory paramEntityManagerFactory);\n}\n")])])]),t("p",[e._v("我们来看其中一个适配器实现类 HibernateJpaVendorAdapter")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class HibernateJpaVendorAdapter extends AbstractJpaVendorAdapter {\n    //设定持久层提供者\n    private final PersistenceProvider persistenceProvider;\n    //设定持久层方言\n    private final JpaDialect jpaDialect;\n\n    public HibernateJpaVendorAdapter() {\n        this.persistenceProvider = new HibernatePersistence();\n        this.jpaDialect = new HibernateJpaDialect();\n    }\n\n    //返回持久层方言\n    public PersistenceProvider getPersistenceProvider() {\n        return this.persistenceProvider;\n    }\n\n    //返回持久层提供者\n    public String getPersistenceProviderRootPackage() {\n        return "org.hibernate";\n    }\n\n    //返回JPA的属性\n    public Map<String, Object> getJpaPropertyMap() {\n        Map jpaProperties = new HashMap();\n\n        if (getDatabasePlatform() != null) {\n            jpaProperties.put("hibernate.dialect", getDatabasePlatform());\n        } else if (getDatabase() != null) {\n            Class databaseDialectClass = determineDatabaseDialectClass(getDatabase());\n            if (databaseDialectClass != null) {\n                jpaProperties.put("hibernate.dialect",\n                        databaseDialectClass.getName());\n            }\n        }\n\n        if (isGenerateDdl()) {\n            jpaProperties.put("hibernate.hbm2ddl.auto", "update");\n        }\n        if (isShowSql()) {\n            jpaProperties.put("hibernate.show_sql", "true");\n        }\n\n        return jpaProperties;\n    }\n\n    //设定数据库\n    protected Class determineDatabaseDialectClass(Database database)     \n    {                                                                                       \n        switch (1.$SwitchMap$org$springframework$orm$jpa$vendor$Database[database.ordinal()]) \n        {                                                                                     \n        case 1:                                                                             \n          return DB2Dialect.class;                                                            \n        case 2:                                                                               \n          return DerbyDialect.class;                                                          \n        case 3:                                                                               \n          return H2Dialect.class;                                                             \n        case 4:                                                                               \n          return HSQLDialect.class;                                                           \n        case 5:                                                                               \n          return InformixDialect.class;                                                       \n        case 6:                                                                               \n          return MySQLDialect.class;                                                          \n        case 7:                                                                               \n          return Oracle9iDialect.class;                                                       \n        case 8:                                                                               \n          return PostgreSQLDialect.class;                                                     \n        case 9:                                                                               \n          return SQLServerDialect.class;                                                      \n        case 10:                                                                              \n          return SybaseDialect.class; }                                                       \n        return null;              \n    }\n\n    //返回JPA方言\n    public JpaDialect getJpaDialect() {\n        return this.jpaDialect;\n    }\n\n    //返回JPA实体管理器工厂\n    public Class<? extends EntityManagerFactory> getEntityManagerFactoryInterface() {\n        return HibernateEntityManagerFactory.class;\n    }\n\n    //返回JPA实体管理器\n    public Class<? extends EntityManager> getEntityManagerInterface() {\n        return HibernateEntityManager.class;\n    }\n}\n')])])]),t("p",[e._v("配置文件中可以这样指定")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<bean id="jpaVendorAdapter" class="org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter"> \n   <property  />  \n   <property />  \n</bean>  \n<bean id="jpaDialect" class="org.springframework.orm.jpa.vendor.HibernateJpaDialect"/>\n')])])]),t("h4",{attrs:{id:"spring-mvc-中的适配器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-中的适配器模式"}},[e._v("#")]),e._v(" spring MVC 中的适配器模式")]),e._v(" "),t("p",[e._v("Spring MVC 中的适配器模式主要用于执行目标 "),t("code",[e._v("Controller")]),e._v(" 中的请求处理方法。")]),e._v(" "),t("p",[e._v("在 Spring MVC 中，"),t("code",[e._v("DispatcherServlet")]),e._v(" 作为用户，"),t("code",[e._v("HandlerAdapter")]),e._v(" 作为期望接口，具体的适配器实现类用于对目标类进行适配，"),t("code",[e._v("Controller")]),e._v(" 作为需要适配的类。")]),e._v(" "),t("p",[e._v("为什么要在 Spring MVC 中使用适配器模式？Spring MVC 中的 "),t("code",[e._v("Controller")]),e._v(" 种类众多，不同类型的 "),t("code",[e._v("Controller")]),e._v(" 通过不同的方法来对请求进行处理。如果不利用适配器模式的话，"),t("code",[e._v("DispatcherServlet")]),e._v(" 直接获取对应类型的 "),t("code",[e._v("Controller")]),e._v("，需要的自行来判断，像下面这段代码一样：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("if(mappedHandler.getHandler() instanceof MultiActionController){  \n   ((MultiActionController)mappedHandler.getHandler()).xxx  \n}else if(mappedHandler.getHandler() instanceof XXX){  \n    ...  \n}else if(...){  \n   ...  \n}\n")])])]),t("p",[e._v("这样假设如果我们增加一个 "),t("code",[e._v("HardController")]),e._v(", 就要在代码中加入一行 "),t("code",[e._v("if(mappedHandler.getHandler() instanceof HardController)")]),e._v("，这种形式就使得程序难以维护，也违反了设计模式中的开闭原则 – 对扩展开放，对修改关闭。")]),e._v(" "),t("p",[e._v("我们来看看源码，首先是适配器接口 "),t("code",[e._v("HandlerAdapter")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public interface HandlerAdapter {\n    boolean supports(Object var1);\n\n    ModelAndView handle(HttpServletRequest var1, HttpServletResponse var2, Object var3) throws Exception;\n\n    long getLastModified(HttpServletRequest var1, Object var2);\n}\n")])])]),t("p",[e._v("现该接口的适配器每一个 "),t("code",[e._v("Controller")]),e._v(" 都有一个适配器与之对应，这样的话，每自定义一个 "),t("code",[e._v("Controller")]),e._v(" 需要定义一个实现 "),t("code",[e._v("HandlerAdapter")]),e._v(" 的适配器。")]),e._v(" "),t("p",[e._v("springmvc 中提供的 "),t("code",[e._v("Controller")]),e._v(" 实现类有如下")]),e._v(" "),t("p",[t("img",{attrs:{src:"http://img.jssjqd.cn/aHR0cDovL2ltYWdlLmxhaWppYW5mZW5nLm9yZy8yMDE4MDkxOV8yMzMzMjcucG5n",alt:""}})]),e._v(" "),t("p",[e._v("springmvc 中提供的 "),t("code",[e._v("HandlerAdapter")]),e._v(" 实现类如下")]),e._v(" "),t("p",[t("img",{attrs:{src:"http://img.jssjqd.cn/aHR0cDovL2ltYWdlLmxhaWppYW5mZW5nLm9yZy8yMDE4MDkxOV8yMzQzMjUucG5n",alt:""}})]),e._v(" "),t("p",[t("code",[e._v("HttpRequestHandlerAdapter")]),e._v(" 这个适配器代码如下")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public class HttpRequestHandlerAdapter implements HandlerAdapter {\n    public HttpRequestHandlerAdapter() {\n    }\n\n    public boolean supports(Object handler) {\n        return handler instanceof HttpRequestHandler;\n    }\n\n    public ModelAndView handle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {\n        ((HttpRequestHandler)handler).handleRequest(request, response);\n        return null;\n    }\n\n    public long getLastModified(HttpServletRequest request, Object handler) {\n        return handler instanceof LastModified ? ((LastModified)handler).getLastModified(request) : -1L;\n    }\n}\n")])])]),t("p",[e._v("当 Spring 容器启动后，会将所有定义好的适配器对象存放在一个 List 集合中，当一个请求来临时，"),t("code",[e._v("DispatcherServlet")]),e._v(" 会通过 "),t("code",[e._v("handler")]),e._v(" 的类型找到对应适配器，并将该适配器对象返回给用户，然后就可以统一通过适配器的 "),t("code",[e._v("hanle()")]),e._v(" 方法来调用 "),t("code",[e._v("Controller")]),e._v(" 中的用于处理请求的方法。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class DispatcherServlet extends FrameworkServlet {\n    private List<HandlerAdapter> handlerAdapters;\n    \n    //初始化handlerAdapters\n    private void initHandlerAdapters(ApplicationContext context) {\n        //..省略...\n    }\n    \n    // 遍历所有的 HandlerAdapters，通过 supports 判断找到匹配的适配器\n    protected HandlerAdapter getHandlerAdapter(Object handler) throws ServletException {\n\t\tfor (HandlerAdapter ha : this.handlerAdapters) {\n\t\t\tif (logger.isTraceEnabled()) {\n\t\t\t\tlogger.trace("Testing handler adapter [" + ha + "]");\n\t\t\t}\n\t\t\tif (ha.supports(handler)) {\n\t\t\t\treturn ha;\n\t\t\t}\n\t\t}\n\t}\n\t\n\t// 分发请求，请求需要找到匹配的适配器来处理\n\tprotected void doDispatch(HttpServletRequest request, HttpServletResponse response) throws Exception {\n\t\tHttpServletRequest processedRequest = request;\n\t\tHandlerExecutionChain mappedHandler = null;\n\n\t\t// Determine handler for the current request.\n\t\tmappedHandler = getHandler(processedRequest);\n\t\t\t\n\t\t// 确定当前请求的匹配的适配器.\n\t\tHandlerAdapter ha = getHandlerAdapter(mappedHandler.getHandler());\n\n\t\tha.getLastModified(request, mappedHandler.getHandler());\n\t\t\t\t\t\n\t\tmv = ha.handle(processedRequest, response, mappedHandler.getHandler());\n    }\n\t// ...省略...\n}\n')])])]),t("p",[e._v("通过适配器模式我们将所有的 "),t("code",[e._v("controller")]),e._v(" 统一交给 "),t("code",[e._v("HandlerAdapter")]),e._v(" 处理，免去了写大量的 "),t("code",[e._v("if-else")]),e._v(" 语句对 "),t("code",[e._v("Controller")]),e._v(" 进行判断，也更利于扩展新的 "),t("code",[e._v("Controller")]),e._v(" 类型。")]),e._v(" "),t("blockquote",[t("p",[e._v("参考："),t("br"),e._v("\n刘伟：设计模式 Java 版"),t("br"),e._v("\n慕课网 java 设计模式精讲 Debug 方式 + 内存分析"),t("br"),e._v("\n孤落:"),t("a",{attrs:{href:"https://blog.csdn.net/lu__peng/article/details/79117894",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring MVC 中的适配器模式"),t("OutboundLink")],1),t("br"),e._v("\nToughMind_："),t("a",{attrs:{href:"https://blog.csdn.net/liuquan0071/article/details/50506121",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入浅出设计模式（五）：7. 适配器模式"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);