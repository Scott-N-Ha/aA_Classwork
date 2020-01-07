require_relative "poly_tree_node.rb"

class KnightPathFinder
  KNIGHT_MOVES = {
    D1L2: [1,-2],
    D2L1: [2,-1],
    D1R2: [1,2],
    D2R1: [2,1],
    U1R2: [-1,2],
    U2R1: [-2,1],
    U1L2: [-1,-2],
    U2L1: [-2,-1]
  }

  def self.valid_moves(pos)
    generated_moves =  []
    
    KNIGHT_MOVES.each do |k,v|
      x = pos[0] + v[0]
      y =  pos[1] + v[1]
      if x.between?(0,7) && y.between?(0,7)
        generated_moves << [x, y]
      end
    end

    generated_moves
  end

  def self.difference(considered, arr_pos)
  
    arr_pos.reject do |pos|
      considered.include?(pos)
    end
  end
  attr_reader :starting_pos, :root_node, :considered_pos
  
  def initialize(pos)
    @starting_pos = pos
    @root_node = PolyTreeNode.new(pos)
    @considered_pos = [pos]
    build_move_tree
  end

  def new_move_positions(pos)
    generated_moves = KnightPathFinder.valid_moves(pos)
    generated_moves = KnightPathFinder.difference(@considered_pos, generated_moves)
    @considered_pos += generated_moves

    generated_moves
  end

  def print
    queue = [@root_node]

    until queue.empty?
      current_node = queue.shift
      p "Current Node: #{current_node.value}"

      current_node.children.each do |node|
        p "Child: #{node.value}"
      end

      queue += current_node.children
    end
  end

  def build_move_tree
    queue = [@root_node]

    until queue.empty?
      current_node = queue.shift
      arr_pos = new_move_positions(current_node.value) # returns a 2D array of positions

      arr_pos.each do |pos|  # Go through array of positions and create nodes
        next_node = PolyTreeNode.new(pos)
        next_node.parent = current_node
        queue << next_node

      end
    end
  end

  def find_path(pos)
    baby = @root_node.bfs(pos) # Find this baby node
    trace_path_back(baby)
  end

  # baby       = [7, 6]
  # 1st Parent = [5, 5]
  
  def trace_path_back(baby)
    # path = []

    # while !baby.parent.nil?

    #   path << baby.parent
    #   #trace_path_back(baby.parent)
    #   baby  = baby.parent
    # end
    return [baby.value] if baby.parent.nil?
    trace_path_back(baby.parent) + [baby.value]

    # path
  end
end


# knight = Knight.new()

# knight.build_move_tree
# knight.find_path

# KnightPathFinder.valid_pos