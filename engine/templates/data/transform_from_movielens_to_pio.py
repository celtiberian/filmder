import argparse

def parse_line(line, dict):
  splitted = line.split(",")[0:-1]
  splitted[1] = dict[splitted[1]]
  return "::".join(splitted)


if __name__ == '__main__':
  parser = argparse.ArgumentParser()
  parser.add_argument('--file', default='./ml-25m/ratings.csv')
  parser.add_argument('--linksfile', default= './ml-25m/links.csv')
  args = parser.parse_args()

  movie_dict = {}
  with open(args.linksfile, "r") as f:
    f.readline()
    for line in f:
      splitted = line.split(",")[0:-1]
      movie_dict[str(splitted[0])] = "tt{}".format(splitted[1])

  with open(args.file, "r") as f:
    n = open("output.txt", "w")
    f.readline()

    for line in f:
      n.write("{}\n".format(parse_line(line, movie_dict)))
    
    n.close()
