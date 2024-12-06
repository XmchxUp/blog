import Image from "next/image";
import "./course.css";

function Course() {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td className="piccol">
            <Image src="https://github.com/XmchxUp/picx-images-hosting/raw/master/20240909/image.lvogtn2zo.webp" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="http://nil.csail.mit.edu/6.5840/2024/schedule.html">
                  MIT 6.5840:
                </a>
                Distributed Systems Engineering
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=go&theme=light" alt={""} />
            </p>
            <p>
              Raft/KV-store
              <a href="https://github.com/cs-learning-every-day/mit-6.5840">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="https://github.com/XmchxUp/picx-images-hosting/raw/master/20240909/image.4qr9sxcsyu.webp" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://15445.courses.cs.cmu.edu/fall2022/">
                  CMU 15-445:
                </a>
                Introduction to Database System
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=cpp&theme=light" alt={""} />
            </p>
            <p>
              数据库底层实现，Buffer Pool Manager (内存管理), B Plus Tree
              (存储引擎), Query Executors & Query Optimizer (算子们 & 优化器),
              Concurrency Control (并发控制)
              <a href="https://github.com/cs-learning-every-day/cmu15-445-fa22">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="https://github.com/XmchxUp/picx-images-hosting/raw/master/20240909/image.8ojn9j60m2.webp" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://pdos.csail.mit.edu/6.S081/2020/">
                  MIT 6.S081:
                </a>
                Operating System Engineering
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=c&theme=light" alt={""} />
            </p>
            <p>
              xv6 OS，后面可以用Rust重写一个。
              <a href="https://github.com/cs-learning-every-day/MIT6.S081">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://learning.edx.org/course/course-v1:BerkeleyX+CS169.1x+1T2022/home">
                  UCB CS169:
                </a>
                Software Engineering
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=ruby&theme=light" alt={""} />
            </p>
            <p>
              Engineering Software as a Service
              <a href="https://github.com/cs-learning-every-day/CS169">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="https://github.com/XmchxUp/picx-images-hosting/raw/master/20240909/image.b8unov1jm.webp" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://web.mit.edu/6.031/www/sp22/">MIT 6.031:</a>
                Software Construction
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=ts,java&theme=light" alt={""} />
            </p>
            <p>
              一些规范
              <a href="https://github.com/cs-learning-every-day/mit-6.031">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol"></td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1224/">
                  CS106B :
                </a>
                Programming Abstractions
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=cpp&theme=light" alt={""} />
            </p>
            <p>
              <a href="https://github.com/cs-learning-every-day/CS106B">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="https://github.com/XmchxUp/picx-images-hosting/raw/master/20240909/image.92q30hlr2g.webp" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://py.mit.edu/fall22">MIT 6.101:</a>
                Fundamentals of Programming
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=python&theme=light" alt={""} />
            </p>
            <p>
              Audio Processing/Image Processing/Bacon
              Number/Snekoban/Recipes/Minesweeper/SAT
              Solver/Autocomplete/Game/LISP Interpreter
              <a href="https://github.com/cs-learning-every-day/mit-6.101-fa22">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="https://github.com/XmchxUp/picx-images-hosting/raw/master/20240526/image.39l0jt95n8.png" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://inst.eecs.berkeley.edu/~cs61c/sp22/">
                  CS 61C:
                </a>
                Great Ideas in Computer Architecture (Machine Structures)
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=c&theme=light" alt={""} />
            </p>
            <p>
              编写Risc-V汇编代码，搭建五级流水线CPU，使用OpenMP, SIMD
              等方法并行优化矩阵运算，实现一个简易的 Numpy。
              <a href="https://github.com/cs-learning-every-day/cs61c-sp22">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPB-sGyH98jQPTOyV99JgqJHJL4qhFNHfLvd5ZG2rS6w&s" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://web.stanford.edu/className/cs106l/">
                  CS 106L:
                </a>
                Standard C++ Programming
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=cpp&theme=light" alt={""} />
            </p>
            <p>
              现代C++基础，两个项目一个有关Wiki BFS算法应用/手写STL HashMap。
              <a href="https://github.com/cs-learning-every-day/CS106L">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="https://sp21.datastructur.es/assets/Image/favicon.ico" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://sp24.datastructur.es/">CS 61B:</a>
                Data Structures and Algorithms
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=java,idea&theme=light" alt={""} />
            </p>
            <p>
              运用数据结构和算法解决实际问题，三个千行项目实现。
              <a href="https://github.com/cs-learning-every-day?q=cs61b&type=all&language=&sort=">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="https://reberhardt.com/favicon.ico" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://reberhardt.com/cs110l/spring-2020/">
                  CS 110L:
                </a>
                Safety in Systems Programming
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=rust&theme=light" alt={""} />
            </p>
            <p>
              用 Rust 实现一个类似于 GDB 的 debugger/实现一个负载均衡器。
              <a href="https://github.com/cs-learning-every-day/CS110L">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="https://cdn.jsdelivr.net/gh/XmchxUp/cloudImage@master/20240216/image.4nbgc50rtog0.png" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://cs144.github.io/">CS 144:</a>
                Introduction to Computer Networking,
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=cpp,linux&theme=light" alt={""} />
            </p>
            <p>
              用 C++ 循序渐进地搭建出整个 TCP/IP 协议栈，IP 路由以及 ARP 协议。
              <a href="https://github.com/cs-learning-every-day/CS144-Fa21">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="http://csapp.cs.cmu.edu/3e/images/csapp3e-cover.jpg" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://csapp.cs.cmu.edu/">CMU 15-213:</a>
                Computer Systems: A Programmer&apos;s Perspective, 3/E
                (CS:APP3e)
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=c,linux&theme=light" alt={""} />
            </p>
            <p>
              系统入门课，课程内容覆盖了汇编语言、体系结构、操作系统、编译链接、并行、网络等，兼具深度和广度。
              <a href="https://github.com/cs-learning-every-day/csapp">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="https://cs.brown.edu/courses/csci0300/2023/images/logo.png" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://cs.brown.edu/courses/csci0300/2024/">
                  CSCI 0300:
                </a>
                Fundamentals of Computer Systems
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=cpp,c,rust&theme=light" alt={""} />
            </p>
            <p>
              系统入门课，Project有 Snake、Dmalloc、Caching
              I/O、WeensyOS、Vunmo、Distributed Store。
              涵盖了C、GDB、Assembly、OS、gRPC、Rust、KV等知识点。
              <a href="https://github.com/cs-learning-every-day/cs300">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="https://static.wixstatic.com/media/44046b_387f62dae530480dac9b1fa8f731bebf~mv2.png/v1/fill/w_415,h_144,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/44046b_387f62dae530480dac9b1fa8f731bebf~mv2.png" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://www.nand2tetris.org/">From Nand to Tetris</a>
                Building a Modern Computer From First Principles
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=go&theme=light" alt={""} />
            </p>
            <p>
              基础课程，从硬件到软件，0到1的世界，用与非门构造出逻辑电路，Assembler，VM，PL，编译器，OS。
              <a href="https://github.com/cs-learning-every-day/nand2tetris">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/8c/ff2f50afdf11e5ae9d8158e68cbd96/UW_square_180x180.png?auto=format%2Ccompress&dpr=2&w=28&h=28" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://www.coursera.org/search?query=Programming+Languages">
                  Programming Languages
                </a>
                (A/B/C) by UW
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=ruby&theme=light" alt={""} />
            </p>
            <p>
              多种编程范式入门，SML、Racket、Ruby。
              <a href="https://github.com/cs-learning-every-day/programming-language-uw">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="https://www.cse.msu.edu/~cse251/images/course.png" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://www.cse.msu.edu/~cse251/index.html">
                  CSE 251 Programming in C
                </a>
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=c&theme=light" alt={""} />
            </p>
            <p>
              C语言入门课程。
              <a href="https://github.com/cs-learning-every-day/cse251">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="https://missing.csail.mit.edu/favicon-32x32.png" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://missing.csail.mit.edu/">
                  MIT-Missing-Semester
                </a>
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=bash,vim,git,linux&theme=light" alt={""} />
            </p>
            <p>
              工具课程，有很多需要熟练掌握的，如Vim、Git、Grep、tmux、Shell配置等。
              <a href="https://github.com/cs-learning-every-day/missing-semester">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td className="piccol">
            <Image src="https://cs61a.org/assets/images/logo.png" alt={""} />
          </td>
          <td className="textcol">
            <p>
              <b>
                <a href="https://cs61a.org/">CS 61A:</a> - Structure and
                Interpretation of Computer Programs
              </b>
              <Image
                className="inline-image"
                src="https://skillicons.dev/icons?i=python&theme=light" alt={""} />
            </p>
            <p>
              Python 版的
              SICP，会随着实现Project如Ants、Scheme等，学习到有关函数式编程，数据抽象、面向对象等知识。
              <a href="https://github.com/cs-learning-every-day/cs61a">
                -{">"}
              </a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Course;
